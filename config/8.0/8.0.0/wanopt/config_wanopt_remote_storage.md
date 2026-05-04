# config wanopt remote-storage

Configure a remote cache device as Web cache storage.

## Syntax

```
config wanopt remote-storage
    Description: Configure a remote cache device as Web cache storage.
    set local-cache-id {string}
    set remote-cache-id {string}
    set remote-cache-ip {ipv4-address-any}
    set status [disable|enable]
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| local-cache-id  | ID that this device uses to       | string             | Maximum length: 35 |                    |
|                 | connect to the remote device.     |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| remote-cache-id | ID of the remote device to which  | string             | Maximum length: 35 |                    |
|                 | the device connects.              |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| remote-cache-ip | IP address of the remote device   | ipv4-address-any   | Not Specified      | 0.0.0.0            |
|                 | to which the device connects.     |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| status          | Enable/disable using remote       | option             | \-                 | disable            |
|                 | device as Web cache storage.      |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *disable*   | Use local disks as Web cache storage.                  |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *enable*    | Use a remote device as Web cache storage.              |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+--------------------------------------------------------------------------------------------------+

