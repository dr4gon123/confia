# config system auto-install

Configure USB auto installation.

## Syntax

```
config system auto-install
    Description: Configure USB auto installation.
    set auto-install-config [enable|disable]
    set auto-install-image [enable|disable]
    set default-config-file {string}
    set default-image-file {string}
end
```

## Parameters

+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter           | Description                       | Type               | Size               | Default            |
+=====================+===================================+====================+====================+====================+
| auto-install-config | Enable/disable auto install the   | option             | \-                 | disable            |
|                     | config in USB disk.               |                    |                    |                    |
|                     |                                   |                    |                    |                    |
|                     | This option is disabled when      |                    |                    |                    |
|                     | unset, but enabled after a        |                    |                    |                    |
|                     | factory reset.                    |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable config.                                         |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable config.                                        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| auto-install-image  | Enable/disable auto install the   | option             | \-                 | disable            |
|                     | image in USB disk.                |                    |                    |                    |
|                     |                                   |                    |                    |                    |
|                     | This option is disabled when      |                    |                    |                    |
|                     | unset, but enabled after a        |                    |                    |                    |
|                     | factory reset.                    |                    |                    |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | Option      | Description                                            |                         |
|                     | +=============+========================================================+                         |
|                     | | *enable*    | Enable config.                                         |                         |
|                     | +-------------+--------------------------------------------------------+                         |
|                     | | *disable*   | Disable config.                                        |                         |
|                     | +-------------+--------------------------------------------------------+                         |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-config-file | Default config file name in USB   | string             | Maximum length:    | fgt_system.conf    |
|                     | disk.                             |                    | 127                |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+
| default-image-file  | Default image file name in USB    | string             | Maximum length:    | image.out          |
|                     | disk.                             |                    | 127                |                    |
+---------------------+-----------------------------------+--------------------+--------------------+--------------------+

