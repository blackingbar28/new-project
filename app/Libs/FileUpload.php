<?php

namespace App\Libs;

use Illuminate\Http\File;
use App;
use Illuminate\Support\Facades\Storage;
use Image;

class FileUpload
{

    /**
     * Environment
     *
     * @var string
     */
    private $environment;

    /**
     * Disk driver
     *
     * @var string
     */
    private $publicDisk;

    /**
     * Disk driver
     *
     * @var string
     */
    private $s3Disk;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->environment = App::environment();
        $this->publicDisk = Storage::disk('public');
        if ($this->environment !== 'local') {
            $this->s3Disk = Storage::disk('s3');
        }
    }

    /**
     * Upload file
     *
     * @param string $fileUrl File url
     *
     * @return string
     */
    public function uploadFile($file, $type = null)
    {
        $path = config('define.image_directory');
        if ($type) {
            $path = config('define.avatar_directory');
        }
        $path = $this->uploadFileToLocal($file, $path);

        return $path;
    }

    public function uploadFileToLocal($file, string $directory)
    {
        $fileName = uniqid(str_random(10)) . '.' . $file->getClientOriginalExtension();
        $path = sprintf('%s/%s', storage_path($directory), $fileName);
        $image = Image::make($file->getRealPath());
        $image->save($path);
        
        return $fileName;
    }

    /**
     * Upload to s3
     *
     * @param string $localPath Local path
     * @param string $directory Directory
     *
     * @return string
     */
    public function uploadFileToS3(string $localPath, string $directory)
    {
        $path = $this->s3Disk->putFile($directory, new File($localPath));
        return $this->s3Disk->url($path);
    }

    /**
     * Delete local directory
     *
     * @param string $directory Directory
     */
    public function deleteLocalDirectory(string $directory)
    {
        $this->publicDisk->deleteDirectory($directory);
    }

    public function uploadVideo($video)
    {
        $fileName = uniqid(str_random(10)) . '.' . $video->getClientOriginalExtension();
        $path = config('define.video_directory');
        $disk = Storage::disk('local');
        $disk->putFileAs($path, $video, $fileName);

        return $fileName;
    }
}
