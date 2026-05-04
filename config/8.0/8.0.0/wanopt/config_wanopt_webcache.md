# config wanopt webcache

Configure global Web cache settings.

## Syntax

```
config wanopt webcache
    Description: Configure global Web cache settings.
    set always-revalidate [enable|disable]
    set cache-by-default [enable|disable]
    set cache-cookie [enable|disable]
    set cache-expired [enable|disable]
    set default-ttl {integer}
    set external [enable|disable]
    set fresh-factor {integer}
    set host-validate [enable|disable]
    set ignore-conditional [enable|disable]
    set ignore-ie-reload [enable|disable]
    set ignore-ims [enable|disable]
    set ignore-pnc [enable|disable]
    set max-object-size {integer}
    set max-ttl {integer}
    set min-ttl {integer}
    set neg-resp-time {integer}
    set reval-pnc [enable|disable]
end
```

## Parameters

+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter          | Description                       | Type               | Size               | Default            |
+====================+===================================+====================+====================+====================+
| always-revalidate  | Enable/disable revalidation of    | option             | \-                 | disable            |
|                    | requested cached objects, which   |                    |                    |                    |
|                    | have content on the server,       |                    |                    |                    |
|                    | before serving it to the client.  |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable revalidation of requested cached objects.       |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable revalidation of requested cached objects.      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cache-by-default   | Enable/disable caching content    | option             | \-                 | disable            |
|                    | that lacks explicit caching       |                    |                    |                    |
|                    | policies from the server.         |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable caching content that lacks explicit caching     |                         |
|                    | |             | policies.                                              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable caching content that lacks explicit caching    |                         |
|                    | |             | policies.                                              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cache-cookie       | Enable/disable caching cookies.   | option             | \-                 | disable            |
|                    | Since cookies contain information |                    |                    |                    |
|                    | for or about individual users,    |                    |                    |                    |
|                    | they not usually cached.          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Cache cookies.                                         |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Do not cache cookies.                                  |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| cache-expired      | Enable/disable caching type-1     | option             | \-                 | disable            |
|                    | objects that are already expired  |                    |                    |                    |
|                    | on arrival.                       |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable setting.                                        |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable setting.                                       |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-ttl        | Default object expiry time        | integer            | Minimum value: 1   | 1440               |
|                    | (default = 1440 min (1 day);      |                    | Maximum value:     |                    |
|                    | maximum = 5256000 min (10         |                    | 5256000            |                    |
|                    | years)). This only applies to     |                    |                    |                    |
|                    | those objects that do not have an |                    |                    |                    |
|                    | expiry time set by the web        |                    |                    |                    |
|                    | server.                           |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| external           | Enable/disable external Web       | option             | \-                 | disable            |
|                    | caching.                          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable external Web caching.                           |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable external Web caching.                          |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| fresh-factor       | Frequency that the server is      | integer            | Minimum value: 1   | 100                |
|                    | checked to see if any objects     |                    | Maximum value: 100 |                    |
|                    | have expired (1 - 100, default =  |                    |                    |                    |
|                    | 100). The higher the fresh        |                    |                    |                    |
|                    | factor, the less often the checks |                    |                    |                    |
|                    | occur.                            |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| host-validate      | Enable/disable validating         | option             | \-                 | disable            |
|                    | \"Host:\" with original server    |                    |                    |                    |
|                    | IP.                               |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable validating \"Host:\" with original server IP.   |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable validating \"Host:\" with original server IP.  |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ignore-conditional | Enable/disable controlling the    | option             | \-                 | disable            |
|                    | behavior of cache-control HTTP    |                    |                    |                    |
|                    | 1.1 header values.                |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable ignoring cache-control HTTP 1.1 header values.  |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable ignoring cache-control HTTP 1.1 header values. |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ignore-ie-reload   | Enable/disable ignoring the       | option             | \-                 | enable             |
|                    | PNC-interpretation of Internet    |                    |                    |                    |
|                    | Explorer\'s Accept: / header.     |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable Enable/disable ignoring the PNC-interpretation  |                         |
|                    | |             | of Internet Explorer\'s Accept: / header.              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable Enable/disable ignoring the PNC-interpretation |                         |
|                    | |             | of Internet Explorer\'s Accept: / header.              |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ignore-ims         | Enable/disable ignoring the       | option             | \-                 | disable            |
|                    | if-modified-since (IMS) header.   |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable ignoring the if-modified-since (IMS) header.    |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable ignoring the if-modified-since (IMS) header.   |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| ignore-pnc         | Enable/disable ignoring the       | option             | \-                 | disable            |
|                    | pragma no-cache (PNC) header.     |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable ignoring the pragma no-cache (PNC) header.      |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable ignoring the pragma no-cache (PNC) header.     |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-object-size    | Maximum cacheable object size in  | integer            | Minimum value: 1   | 512000             |
|                    | kB (1 - 2147483 kb (2GB). All     |                    | Maximum value:     |                    |
|                    | objects that exceed this are      |                    | 2147483            |                    |
|                    | delivered to the client but not   |                    |                    |                    |
|                    | stored in the web cache.          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| max-ttl            | Maximum time an object can stay   | integer            | Minimum value: 1   | 7200               |
|                    | in the web cache without checking |                    | Maximum value:     |                    |
|                    | to see if it has expired on the   |                    | 5256000            |                    |
|                    | server (default = 7200 min (5     |                    |                    |                    |
|                    | days); maximum = 5256000 min (10  |                    |                    |                    |
|                    | years)).                          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| min-ttl            | Minimum time an object can stay   | integer            | Minimum value: 1   | 5                  |
|                    | in the web cache without checking |                    | Maximum value:     |                    |
|                    | to see if it has expired on the   |                    | 5256000            |                    |
|                    | server (default = 5 min; maximum  |                    |                    |                    |
|                    | = 5256000 (10 years)).            |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| neg-resp-time      | Time in minutes to cache negative | integer            | Minimum value: 0   | 0                  |
|                    | responses or errors (0 -          |                    | Maximum value:     |                    |
|                    | 4294967295, default = 0 which     |                    | 4294967295         |                    |
|                    | means negative responses are not  |                    |                    |                    |
|                    | cached).                          |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
| reval-pnc          | Enable/disable revalidation of    | option             | \-                 | disable            |
|                    | pragma-no-cache (PNC) to address  |                    |                    |                    |
|                    | bandwidth concerns.               |                    |                    |                    |
+--------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | Option      | Description                                            |                         |
|                    | +=============+========================================================+                         |
|                    | | *enable*    | Enable revalidation of pragma-no-cache (PNC).          |                         |
|                    | +-------------+--------------------------------------------------------+                         |
|                    | | *disable*   | Disable revalidation of pragma-no-cache (PNC).         |                         |
|                    | +-------------+--------------------------------------------------------+                         |
+--------------------+--------------------------------------------------------------------------------------------------+

