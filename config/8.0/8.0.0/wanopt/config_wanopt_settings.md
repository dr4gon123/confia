# config wanopt settings

Configure WAN optimization settings.

## Syntax

```
config wanopt settings
    Description: Configure WAN optimization settings.
    set auto-detect-algorithm [simple|diff-req-resp]
    set host-id {string}
    set tunnel-optimization [memory-usage|balanced|...]
    set tunnel-ssl-algorithm [high|medium|...]
end
```

## Parameters

+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter             | Description                       | Type                  | Size                  | Default               |
+=======================+===================================+=======================+=======================+=======================+
| auto-detect-algorithm | Auto detection algorithms used in | option                | \-                    | simple                |
|                       | tunnel negotiations.              |                       |                       |                       |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                       | +-----------------+--------------------------------------------------------+                              |
|                       | | Option          | Description                                            |                              |
|                       | +=================+========================================================+                              |
|                       | | *simple*        | Use the same TCP option value in SYN/SYNACK packets.   |                              |
|                       | |                 | Backward compatible.                                   |                              |
|                       | +-----------------+--------------------------------------------------------+                              |
|                       | | *diff-req-resp* | Use different TCP option values in SYN/SYNACK packets  |                              |
|                       | |                 | to avoid false positive detection.                     |                              |
|                       | +-----------------+--------------------------------------------------------+                              |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| host-id               | Local host ID (must also be       | string                | Maximum length: 35    | default-id            |
|                       | entered in the remote             |                       |                       |                       |
|                       | FortiGate\'s peer list).          |                       |                       |                       |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| tunnel-optimization   | WANOpt tunnel optimization        | option                | \-                    | balanced \*\*         |
|                       | option.                           |                       |                       |                       |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                       | +----------------+--------------------------------------------------------+                               |
|                       | | Option         | Description                                            |                               |
|                       | +================+========================================================+                               |
|                       | | *memory-usage* | Optimize tunnel for low system memory usage.           |                               |
|                       | +----------------+--------------------------------------------------------+                               |
|                       | | *balanced*     | Optimize tunnel to balance between system memory usage |                               |
|                       | |                | and throughput.                                        |                               |
|                       | +----------------+--------------------------------------------------------+                               |
|                       | | *throughput*   | Optimize tunnel for throughput.                        |                               |
|                       | +----------------+--------------------------------------------------------+                               |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| tunnel-ssl-algorithm  | Relative strength of encryption   | option                | \-                    | high                  |
|                       | algorithms accepted during tunnel |                       |                       |                       |
|                       | negotiation.                      |                       |                       |                       |
+-----------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                       | +-------------+--------------------------------------------------------+                                  |
|                       | | Option      | Description                                            |                                  |
|                       | +=============+========================================================+                                  |
|                       | | *high*      | High encryption. Allow only AES and ChaCha.            |                                  |
|                       | +-------------+--------------------------------------------------------+                                  |
|                       | | *medium*    | Medium encryption. Allow AES, ChaCha, 3DES, and RC4.   |                                  |
|                       | +-------------+--------------------------------------------------------+                                  |
|                       | | *low*       | Low encryption. Allow AES, ChaCha, 3DES, RC4, and DES. |                                  |
|                       | +-------------+--------------------------------------------------------+                                  |
+-----------------------+-----------------------------------------------------------------------------------------------------------+

