# config wireless-controller hotspot20 h2qp-osu-provider

Configure online sign up (OSU) provider list.

## Syntax

```
config wireless-controller hotspot20 h2qp-osu-provider
    Description: Configure online sign up (OSU) provider list.
    edit <name>
        config friendly-name
            Description: OSU provider friendly name.
            edit <index>
                set friendly-name {string}
                set lang {string}
            next
        end
        set icon {string}
        set osu-method {option1}, {option2}, ...
        set osu-nai {string}
        set server-uri {string}
        config service-description
            Description: OSU service name.
            edit <service-id>
                set lang {string}
                set service-description {string}
            next
        end
    next
end
```

## Parameters

+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter  | Description                       | Type                  | Size                  | Default               |
+============+===================================+=======================+=======================+=======================+
| icon       | OSU provider icon.                | string                | Maximum length: 35    |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| name       | OSU provider ID.                  | string                | Maximum length: 35    |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| osu-method | OSU method list.                  | option                | \-                    |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|            | +----------------+--------------------------------------------------------+                               |
|            | | Option         | Description                                            |                               |
|            | +================+========================================================+                               |
|            | | *oma-dm*       | OMA DM.                                                |                               |
|            | +----------------+--------------------------------------------------------+                               |
|            | | *soap-xml-spp* | SOAP XML SPP.                                          |                               |
|            | +----------------+--------------------------------------------------------+                               |
|            | | *reserved*     | Reserved.                                              |                               |
|            | +----------------+--------------------------------------------------------+                               |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| osu-nai    | OSU NAI.                          | string                | Maximum length: 255   |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| server-uri | Server URI.                       | string                | Maximum length: 255   |                       |
+------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

