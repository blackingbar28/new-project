<?php

namespace App\Libs;

use Illuminate\Http\File;
use App;
use Illuminate\Support\Facades\Storage;

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
    public function uploadFile(string $fileUrl)
    {
        $configPath = config('define.profile_pic_directory');
        $directory = sprintf($configPath, $this->environment);

        $path = $this->uploadFileToLocal($fileUrl, $directory);

        if ($this->environment !== 'local') {
            $localPath = $this->publicDisk->path($path);
            $path = $this->uploadFileToS3($localPath, $directory);
            $this->deleteLocalDirectory($directory);
            return $path;
        }
        return $this->publicDisk->url($path);
    }

    /**
     * Upload to local from external url
     *
     * @param string $fileUrl   File url
     * @param string $directory Directory
     *
     * @return string
     */
    public function uploadFileToLocal(string $fileUrl, string $directory)
    {
        $contents = file_get_contents($fileUrl);
        $fileName = $directory . '/' . uniqid(str_random(10), true);
        $this->publicDisk->put($fileName, $contents);
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
}
