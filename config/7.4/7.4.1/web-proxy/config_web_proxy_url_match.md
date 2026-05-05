# config web-proxy url-match

Exempt URLs from web proxy forwarding and caching.

## Syntax

```
config web-proxy url-match
    Description: Exempt URLs from web proxy forwarding and caching.
    edit <name>
        set cache-exemption [enable|disable]
        set comment {var-string}
        set fast-fallback {string}
        set forward-server {string}
        set status [enable|disable]
        set url-pattern {string}
    next
end
```

## Parameters

+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter       | Description                       | Type               | Size               | Default            |
+=================+===================================+====================+====================+====================+
| cache-exemption | Enable/disable exempting this URL | option             | \-                 | disable            |
|                 | pattern from caching.             |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable exempting this URL pattern from caching.        |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable exempting this URL pattern from caching.       |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| comment         | Comment.                          | var-string         | Maximum length:    |                    |
|                 |                                   |                    | 255                |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| fast-fallback   | Fast fallback configuration entry | string             | Maximum length: 63 |                    |
|                 | name.                             |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| forward-server  | Forward server name.              | string             | Maximum length: 63 |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| name            | Configure a name for the URL to   | string             | Maximum length: 63 |                    |
|                 | be exempted.                      |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| status          | Enable/disable exempting the URLs | option             | \-                 | enable             |
|                 | matching the URL pattern from web |                    |                    |                    |
|                 | proxy forwarding and caching.     |                    |                    |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | Option      | Description                                            |                         |
|                 | +=============+========================================================+                         |
|                 | | *enable*    | Enable exempting the matching URLs.                    |                         |
|                 | +-------------+--------------------------------------------------------+                         |
|                 | | *disable*   | Disable exempting the matching URLs.                   |                         |
|                 | +-------------+--------------------------------------------------------+                         |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+
| url-pattern     | URL pattern to be exempted from   | string             | Maximum length:    |                    |
|                 | web proxy forwarding and caching. |                    | 511                |                    |
+-----------------+-----------------------------------+--------------------+--------------------+--------------------+

