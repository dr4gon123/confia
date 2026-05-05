# config icap profile

Configure ICAP profiles.

## Syntax

```
config icap profile
    Description: Configure ICAP profiles.
    edit <name>
        set 204-response [disable|enable]
        set 204-size-limit {integer}
        set chunk-encap [disable|enable]
        set comment {var-string}
        set extension-feature {option1}, {option2}, ...
        set file-transfer {option1}, {option2}, ...
        set file-transfer-failure [error|bypass]
        set file-transfer-path {string}
        set file-transfer-server {string}
        set icap-block-log [disable|enable]
        config icap-headers
            Description: Configure ICAP forwarded request headers.
            edit <id>
                set base64-encoding [disable|enable]
                set content {string}
                set name {string}
            next
        end
        set methods {option1}, {option2}, ...
        set ocr-only [disable|enable]
        set preview [disable|enable]
        set preview-data-length {integer}
        set replacemsg-group {string}
        set request [disable|enable]
        set request-failure [error|bypass]
        set request-path {string}
        set request-server {string}
        set respmod-default-action [forward|bypass]
        config respmod-forward-rules
            Description: ICAP response mode forward rules.
            edit <name>
                set action [forward|bypass]
                config header-group
                    Description: HTTP header group.
                    edit <id>
                        set case-sensitivity [disable|enable]
                        set header {string}
                        set header-name {string}
                    next
                end
                set host {string}
                set http-resp-status-code <code1>, <code2>, ...
            next
        end
        set response [disable|enable]
        set response-failure [error|bypass]
        set response-path {string}
        set response-req-hdr [disable|enable]
        set response-server {string}
        set scan-progress-interval {integer}
        set streaming-content-bypass [disable|enable]
        set timeout {integer}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter                | Description                       | Type                | Size                | Default             |
+==========================+===================================+=====================+=====================+=====================+
| 204-response             | Enable/disable allowance of 204   | option              | \-                  | disable             |
|                          | response from ICAP server.        |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable allowance of 204 response from ICAP server.    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable allowance of 204 response from ICAP server.     |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| 204-size-limit           | 204 response size limit to be     | integer             | Minimum value: 1    | 1                   |
|                          | saved by ICAP client in           |                     | Maximum value: 10   |                     |
|                          | megabytes.                        |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| chunk-encap              | Enable/disable chunked            | option              | \-                  | disable             |
|                          | encapsulation.                    |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Do not encapsulate chunked data.                       |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Encapsulate chunked data into a new chunk.             |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| comment                  | Comment.                          | var-string          | Maximum length: 255 |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| extension-feature        | Enable/disable ICAP extension     | option              | \-                  |                     |
|                          | features.                         |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-----------------+--------------------------------------------------------+                        |
|                          | | Option          | Description                                            |                        |
|                          | +=================+========================================================+                        |
|                          | | *scan-progress* | Support X-Scan-Progress-Interval ICAP header.          |                        |
|                          | +-----------------+--------------------------------------------------------+                        |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| file-transfer            | Configure the file transfer       | option              | \-                  |                     |
|                          | protocols to pass transferred     |                     |                     |                     |
|                          | files to an ICAP server as        |                     |                     |                     |
|                          | REQMOD.                           |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *ssh*       | Forward file transfer with SSH protocol to ICAP server |                            |
|                          | |             | for further processing.                                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *ftp*       | Forward file transfer with FTP protocol to ICAP server |                            |
|                          | |             | for further processing.                                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| file-transfer-failure    | Action to take if the ICAP server | option              | \-                  | error               |
|                          | cannot be contacted when          |                     |                     |                     |
|                          | processing a file transfer.       |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *error*     | Error.                                                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *bypass*    | Bypass.                                                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| file-transfer-path       | Path component of the ICAP URI    | string              | Maximum length: 127 |                     |
|                          | that identifies the file transfer |                     |                     |                     |
|                          | processing service.               |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| file-transfer-server     | ICAP server to use for a file     | string              | Maximum length: 63  |                     |
|                          | transfer.                         |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| icap-block-log           | Enable/disable UTM log when       | option              | \-                  | disable             |
|                          | infection found.                  |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable UTM log when infection found.                  |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable UTM log when infection found.                   |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| methods                  | The allowed HTTP methods that     | option              | \-                  | delete get head     |
|                          | will be sent to ICAP server for   |                     |                     | options post put    |
|                          | further processing.               |                     |                     | trace connect other |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *delete*    | Forward HTTP request or response with DELETE method to |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *get*       | Forward HTTP request or response with GET method to    |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *head*      | Forward HTTP request or response with HEAD method to   |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *options*   | Forward HTTP request or response with OPTIONS method   |                            |
|                          | |             | to ICAP server for further processing.                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *post*      | Forward HTTP request or response with POST method to   |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *put*       | Forward HTTP request or response with PUT method to    |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *trace*     | Forward HTTP request or response with TRACE method to  |                            |
|                          | |             | ICAP server for further processing.                    |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *connect*   | Forward HTTP request or response with CONNECT method   |                            |
|                          | |             | to ICAP server for further processing.                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *other*     | Forward HTTP request or response with All other        |                            |
|                          | |             | methods to ICAP server for further processing.         |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| name                     | ICAP profile name.                | string              | Maximum length: 47  |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ocr-only                 | Enable/disable this FortiGate     | option              | \-                  | disable             |
|                          | unit to submit only OCR           |                     |                     |                     |
|                          | interested content to the ICAP    |                     |                     |                     |
|                          | server.                           |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable this FortiGate unit to submit only OCR         |                            |
|                          | |             | interested content to the ICAP server.                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable this FortiGate unit to submit only OCR          |                            |
|                          | |             | interested content to the ICAP server.                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| preview                  | Enable/disable preview of data to | option              | \-                  | disable             |
|                          | ICAP server.                      |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable preview of data to ICAP server.                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable preview of data to ICAP server.                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| preview-data-length      | Preview data length to be sent to | integer             | Minimum value: 0    | 0                   |
|                          | ICAP server.                      |                     | Maximum value: 4096 |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| replacemsg-group         | Replacement message group.        | string              | Maximum length: 35  |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| request                  | Enable/disable whether an HTTP    | option              | \-                  | disable             |
|                          | request is passed to an ICAP      |                     |                     |                     |
|                          | server.                           |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable HTTP request passing to ICAP server.           |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable HTTP request passing to ICAP server.            |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| request-failure          | Action to take if the ICAP server | option              | \-                  | error               |
|                          | cannot be contacted when          |                     |                     |                     |
|                          | processing an HTTP request.       |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *error*     | Error.                                                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *bypass*    | Bypass.                                                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| request-path             | Path component of the ICAP URI    | string              | Maximum length: 127 |                     |
|                          | that identifies the HTTP request  |                     |                     |                     |
|                          | processing service.               |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| request-server           | ICAP server to use for an HTTP    | string              | Maximum length: 63  |                     |
|                          | request.                          |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| respmod-default-action   | Default action to ICAP response   | option              | \-                  | forward             |
|                          | modification (respmod)            |                     |                     |                     |
|                          | processing.                       |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *forward*   | Forward response to ICAP server unless a rule          |                            |
|                          | |             | specifies not to.                                      |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *bypass*    | Don\'t forward request to ICAP server unless a rule    |                            |
|                          | |             | specifies to forward the request.                      |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| response                 | Enable/disable whether an HTTP    | option              | \-                  | disable             |
|                          | response is passed to an ICAP     |                     |                     |                     |
|                          | server.                           |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable HTTP response passing to ICAP server.          |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable HTTP response passing to ICAP server.           |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| response-failure         | Action to take if the ICAP server | option              | \-                  | error               |
|                          | cannot be contacted when          |                     |                     |                     |
|                          | processing an HTTP response.      |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *error*     | Error.                                                 |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *bypass*    | Bypass.                                                |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| response-path            | Path component of the ICAP URI    | string              | Maximum length: 127 |                     |
|                          | that identifies the HTTP response |                     |                     |                     |
|                          | processing service.               |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| response-req-hdr         | Enable/disable addition of        | option              | \-                  | enable              |
|                          | req-hdr for ICAP response         |                     |                     |                     |
|                          | modification (respmod)            |                     |                     |                     |
|                          | processing.                       |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Do not add req-hdr for response modification (respmod) |                            |
|                          | |             | processing.                                            |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Add req-hdr for response modification (respmod)        |                            |
|                          | |             | processing.                                            |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| response-server          | ICAP server to use for an HTTP    | string              | Maximum length: 63  |                     |
|                          | response.                         |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| scan-progress-interval   | Scan progress interval value.     | integer             | Minimum value: 5    | 10                  |
|                          |                                   |                     | Maximum value: 30   |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| streaming-content-bypass | Enable/disable bypassing of ICAP  | option              | \-                  | disable             |
|                          | server for streaming content.     |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | Option      | Description                                            |                            |
|                          | +=============+========================================================+                            |
|                          | | *disable*   | Disable bypassing of ICAP server for streaming         |                            |
|                          | |             | content.                                               |                            |
|                          | +-------------+--------------------------------------------------------+                            |
|                          | | *enable*    | Enable bypassing of ICAP server for streaming content. |                            |
|                          | +-------------+--------------------------------------------------------+                            |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| timeout                  | Time (in seconds) that ICAP       | integer             | Minimum value: 30   | 30                  |
|                          | client waits for the response     |                     | Maximum value: 3600 |                     |
|                          | from ICAP server.                 |                     |                     |                     |
+--------------------------+-----------------------------------+---------------------+---------------------+---------------------+

