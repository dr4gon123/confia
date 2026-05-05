# config system ike

Configure IKE global attributes.

## Syntax

```
config system ike
    Description: Configure IKE global attributes.
    config dh-group-1
        Description: Diffie-Hellman group 1 (MODP-768).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-14
        Description: Diffie-Hellman group 14 (MODP-2048).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-15
        Description: Diffie-Hellman group 15 (MODP-3072).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-16
        Description: Diffie-Hellman group 16 (MODP-4096).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-17
        Description: Diffie-Hellman group 17 (MODP-6144).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-18
        Description: Diffie-Hellman group 18 (MODP-8192).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-19
        Description: Diffie-Hellman group 19 (EC-P256).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-2
        Description: Diffie-Hellman group 2 (MODP-1024).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-20
        Description: Diffie-Hellman group 20 (EC-P384).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-21
        Description: Diffie-Hellman group 21 (EC-P521).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-27
        Description: Diffie-Hellman group 27 (EC-P224BP).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-28
        Description: Diffie-Hellman group 28 (EC-P256BP).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-29
        Description: Diffie-Hellman group 29 (EC-P384BP).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-30
        Description: Diffie-Hellman group 30 (EC-P512BP).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-31
        Description: Diffie-Hellman group 31 (EC-X25519).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-32
        Description: Diffie-Hellman group 32 (EC-X448).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    config dh-group-5
        Description: Diffie-Hellman group 5 (MODP-1536).
        set mode [software|hardware|...]
        set keypair-cache [global|custom]
        set keypair-count {integer}
    end
    set dh-keypair-cache [enable|disable]
    set dh-keypair-count {integer}
    set dh-keypair-throttle [enable|disable]
    set dh-mode [software|hardware]
    set dh-multiprocess [enable|disable]
    set dh-worker-count {integer}
    set embryonic-limit {integer}
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| dh-keypair-cache    | Enable/disable Diffie-Hellman key | option             | \-                 | enable             |
|                     | pair cache.                       |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable Diffie-Hellman key pair cache.                  |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable Diffie-Hellman key pair cache.                 |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dh-keypair-count    | Number of key pairs to            | integer            | Minimum value: 0   | 100 \*\*           |
|                     | pre-generate for each             |                    | Maximum value:     |                    |
|                     | Diffie-Hellman group              |                    | 50000              |                    |
|                     | (per-worker).                     |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dh-keypair-throttle | Enable/disable Diffie-Hellman key | option             | \-                 | enable             |
|                     | pair cache CPU throttling.        |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable Diffie-Hellman key pair cache CPU throttling.   |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable Diffie-Hellman key pair cache CPU throttling.  |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dh-mode             | Use software (CPU) or hardware    | option             | \-                 | hardware \*\*      |
|                     | (CPX) to perform Diffie-Hellman   |                    |                    |                    |
|                     | calculations.                     |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *software*  | Prefer CPU to perform Diffie-Hellman calculations.     |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *hardware*  | Prefer CPX to perform Diffie-Hellman calculations.     |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dh-multiprocess     | Enable/disable multiprocess       | option             | \-                 | enable             |
|                     | Diffie-Hellman daemon for IKE.    |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable multiprocess Diffie-Hellman for IKE.            |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable multiprocess Diffie-Hellman for IKE.           |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| dh-worker-count     | Number of Diffie-Hellman workers  | integer            | Minimum value: 1   | 0                  |
|                     | to start.                         |                    | Maximum value: 8   |                    |
|                     |                                   |                    | \*\*               |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| embryonic-limit     | Maximum number of IPsec tunnels   | integer            | Minimum value: 50  | 5000 \*\*          |
|                     | to negotiate simultaneously.      |                    | Maximum value:     |                    |
|                     |                                   |                    | 20000              |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

