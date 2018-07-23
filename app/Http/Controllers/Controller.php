<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Exception;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Validate data.
     *
     * @param array $data    Data validate
     * @param array $rules   Rules validate
     * @param str   $text    Text
     * @param array $message Message
     *
     * @return boolean
     *
     * @throws StoreResourceFailedException
     */
    public function validateData(array $data, array $rules, string $text = '', $message = [])
    {
        $validator = app('validator')->make($data, $rules, $message);

        if ($validator->fails()) {
            throw new \Exception('Validation failed');
        }

        return true;
    }

    /**
     * Return a new JSON response from the application.
     *
     * @param string       $message Message
     * @param string|array $data    Data
     * @param int          $status  Status code
     * @param array        $headers Headers
     *
     * @return \Illuminate\Http\JsonResponse;
     */
    public function responseSuccess($message, $data = [], $status = 200, array $headers = [])
    {
        return response()->json([
            'status_code' => $status,
            'message' => $message,
            'data' => $data
        ], $status, $headers);
    }

    /**
     * Return a new JSON response from the application.
     *
     * @param string       $message Message
     * @param string|array $error   Error response
     * @param int          $status  Status code
     * @param array        $headers Headers
     *
     * @return \Illuminate\Http\JsonResponse;
     */
    public function responseError($message, $error = [], $status = 500, array $headers = [])
    {
        if ($error instanceof Exception) {
            app('sentry')->captureException($error);
            $error = [];
        } elseif ($message instanceof ModelNotFoundException) {
            return $this->responseNotFound($message);
        }

        return response()->json([
            'status_code' => $status,
            'message' => $message,
            'errors' => $error
        ], $status, $headers);
    }

    /**
     * Response not found exception
     *
     * @param Exception $exception Exception
     *
     * @return \Illuminate\Http\JsonResponse;
     */
    protected function responseNotFound($exception)
    {
        return response()->json([
            'status_code' => 404,
            'message' => trans('messages.' . $exception->getModel() . '.not_found'),
            'errors' => []
        ], 404);
    }
}
