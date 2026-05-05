# config webfilter search-engine

Configure web filter search engines.

## Syntax

```
config webfilter search-engine
    Description: Configure web filter search engines.
    edit <name>
        set charset [utf-8|gb2312]
        set hostname {string}
        set query {string}
        set safesearch [disable|url|...]
        set safesearch-str {string}
        set url {string}
    next
end
```

## Parameters

+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter      | Description                       | Type                | Size                | Default             |
+================+===================================+=====================+=====================+=====================+
| charset        | Search engine charset.            | option              | \-                  | utf-8               |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
|                | +-------------+--------------------------------------------------------+                            |
|                | | Option      | Description                                            |                            |
|                | +=============+========================================================+                            |
|                | | *utf-8*     | UTF-8 encoding.                                        |                            |
|                | +-------------+--------------------------------------------------------+                            |
|                | | *gb2312*    | GB2312 encoding.                                       |                            |
|                | +-------------+--------------------------------------------------------+                            |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| hostname       | Hostname (regular expression).    | string              | Maximum length: 127 |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| name           | Search engine name.               | string              | Maximum length: 35  |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| query          | Code used to prefix a query (must | string              | Maximum length: 15  |                     |
|                | end with an equals character).    |                     |                     |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| safesearch     | Safe search method. You can       | option              | \-                  | disable             |
|                | disable safe search, add the safe |                     |                     |                     |
|                | search string to URLs, or insert  |                     |                     |                     |
|                | a safe search header.             |                     |                     |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
|                | +--------------+--------------------------------------------------------+                           |
|                | | Option       | Description                                            |                           |
|                | +==============+========================================================+                           |
|                | | *disable*    | Site does not support safe search.                     |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *url*        | Safe search selected with a parameter in the URL.      |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *header*     | Safe search selected by search header (i.e.            |                           |
|                | |              | youtube.edu).                                          |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *translate*  | Perform URL FortiGuard check on translated URL.        |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *yt-pattern* | Pattern to match YouTube channel ID.                   |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *yt-scan*    | Perform IPS scan.                                      |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *yt-video*   | Pattern to match YouTube video name.                   |                           |
|                | +--------------+--------------------------------------------------------+                           |
|                | | *yt-channel* | Pattern to match YouTube channel name.                 |                           |
|                | +--------------+--------------------------------------------------------+                           |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| safesearch-str | Safe search parameter used in the | string              | Maximum length: 255 |                     |
|                | URL in URL mode. In translate     |                     |                     |                     |
|                | mode, it provides either the      |                     |                     |                     |
|                | regex to translate the URL or the |                     |                     |                     |
|                | special case to translate the     |                     |                     |                     |
|                | URL.                              |                     |                     |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+
| url            | URL (regular expression).         | string              | Maximum length: 127 |                     |
+----------------+-----------------------------------+---------------------+---------------------+---------------------+

