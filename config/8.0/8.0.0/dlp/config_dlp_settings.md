# config dlp settings

Configure settings for DLP.

## Syntax

```
config dlp settings
    Description: Configure settings for DLP.
    set cache-mem-percent {integer}
    set chunk-size {integer}
    set config-builder-timeout {integer}
    set db-mode [stop-adding|remove-modified-then-oldest|...]
    config ocr
        Description: Configure settings for optical character recognition (OCR) conversion.
        set confidence {integer}
        set filetype-ignore-list <name1>, <name2>, ...
        set max-file-size {integer}
        set scan [enable|disable]
    end
    set size {integer}
    set storage-device {string}
end
```

## Parameters

+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| Parameter              | Description                       | Type                     | Size                     | Default                  |
+========================+===================================+==========================+==========================+==========================+
| cache-mem-percent \*   | Maximum percentage of available   | integer                  | Minimum value: 1 Maximum | 2                        |
|                        | memory allocated to caching DLP   |                          | value: 15                |                          |
|                        | fingerprints (1 - 15).            |                          |                          |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| chunk-size \*          | Maximum fingerprint chunk size.   | integer                  | Minimum value: 100       | 2800                     |
|                        | Caution, changing this setting    |                          | Maximum value: 100000    |                          |
|                        | will flush the entire database.   |                          |                          |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| config-builder-timeout | Maximum time allowed for building | integer                  | Minimum value: 10        | 60                       |
|                        | a single DLP profile (default 60  |                          | Maximum value: 100000    |                          |
|                        | seconds).                         |                          |                          |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| db-mode \*             | Behavior when the maximum size is | option                   | \-                       | stop-adding              |
|                        | reached in the DLP fingerprint    |                          |                          |                          |
|                        | database.                         |                          |                          |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
|                        | +-------------------------------+--------------------------------------------------------+                         |
|                        | | Option                        | Description                                            |                         |
|                        | +===============================+========================================================+                         |
|                        | | *stop-adding*                 | Stop adding entries.                                   |                         |
|                        | +-------------------------------+--------------------------------------------------------+                         |
|                        | | *remove-modified-then-oldest* | Remove modified chunks first, then oldest file         |                         |
|                        | |                               | entries.                                               |                         |
|                        | +-------------------------------+--------------------------------------------------------+                         |
|                        | | *remove-oldest*               | Remove the oldest files first.                         |                         |
|                        | +-------------------------------+--------------------------------------------------------+                         |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| size \*                | Maximum total size of files       | integer                  | Minimum value: 16        | 16                       |
|                        | within the DLP fingerprint        |                          | Maximum value:           |                          |
|                        | database (MB).                    |                          | 4294967295               |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+
| storage-device \*      | Storage device name.              | string                   | Maximum length: 35       |                          |
+------------------------+-----------------------------------+--------------------------+--------------------------+--------------------------+

