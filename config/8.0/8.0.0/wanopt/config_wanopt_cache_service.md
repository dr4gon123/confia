# config wanopt cache-service

Designate cache-service for wan-optimization and webcache.

## Syntax

```
config wanopt cache-service
    Description: Designate cache-service for wan-optimization and webcache.
    set acceptable-connections [any|peers]
    set collaboration [enable|disable]
    set device-id {string}
    config dst-peer
        Description: Modify cache-service destination peer list.
        edit <device-id>
            set auth-type {integer}
            set encode-type {integer}
            set ip {ipv4-address-any}
            set priority {integer}
        next
    end
    set prefer-scenario [balance|prefer-speed|...]
    config src-peer
        Description: Modify cache-service source peer list.
        edit <device-id>
            set auth-type {integer}
            set encode-type {integer}
            set ip {ipv4-address-any}
            set priority {integer}
        next
    end
end
```

## Parameters

+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter              | Description                       | Type                  | Size                  | Default               |
+========================+===================================+=======================+=======================+=======================+
| acceptable-connections | Set strategy when accepting cache | option                | \-                    | any                   |
|                        | collaboration connection.         |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | Option      | Description                                            |                                  |
|                        | +=============+========================================================+                                  |
|                        | | *any*       | We can accept any cache-collaboration connection.      |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | *peers*     | We can only accept connections that are already in     |                                  |
|                        | |             | src-peers.                                             |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| collaboration          | Enable/disable                    | option                | \-                    | disable               |
|                        | cache-collaboration between       |                       |                       |                       |
|                        | cache-service clusters.           |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | Option      | Description                                            |                                  |
|                        | +=============+========================================================+                                  |
|                        | | *enable*    | Enable cache cache-collaboration.                      |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
|                        | | *disable*   | Disable cache cache-collaboration.                     |                                  |
|                        | +-------------+--------------------------------------------------------+                                  |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| device-id              | Set identifier for this cache     | string                | Maximum length: 35    | default_dev_id        |
|                        | device.                           |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| prefer-scenario        | Set the preferred cache behavior  | option                | \-                    | balance               |
|                        | towards the balance between       |                       |                       |                       |
|                        | latency and hit-ratio.            |                       |                       |                       |
+------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                        | +----------------+--------------------------------------------------------+                               |
|                        | | Option         | Description                                            |                               |
|                        | +================+========================================================+                               |
|                        | | *balance*      | Balance between speed and cache hit ratio.             |                               |
|                        | +----------------+--------------------------------------------------------+                               |
|                        | | *prefer-speed* | Prefer response speed at the expense of increased      |                               |
|                        | |                | cache bypasses.                                        |                               |
|                        | +----------------+--------------------------------------------------------+                               |
|                        | | *prefer-cache* | Prefer improving hit-ratio through increasing latency  |                               |
|                        | |                | tolerance.                                             |                               |
|                        | +----------------+--------------------------------------------------------+                               |
+------------------------+-----------------------------------------------------------------------------------------------------------+

