# config system cloud-service

Configure system cloud service.

## Syntax

```
config system cloud-service
    Description: Configure system cloud service.
    edit <name>
        set gck-access-token-lifetime {integer}
        set gck-keyid {string}
        set gck-private-key {string}
        set gck-service-account {string}
        set traffic-vdom {string}
        set vendor [unknown|google-cloud-kms]
    next
end
```

## Parameters

+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter                 | Description                       | Type                   | Size                   | Default                |
+===========================+===================================+========================+========================+========================+
| gck-access-token-lifetime | Lifetime of automatically         | integer                | Minimum value: 1       | 60                     |
|                           | generated access tokens in        |                        | Maximum value: 3600    |                        |
|                           | minutes (default is 60 minutes).  |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gck-keyid                 | Key id, also referred as \"kid\". | string                 | Maximum length: 127    |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gck-private-key           | Service account private key in    | string                 | Maximum length: 8191   |                        |
|                           | PEM format (e.g. \"\-\-\-\--BEGIN |                        |                        |                        |
|                           | PRIVATE KEY\-\-\-\--\\ \...\").   |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| gck-service-account       | Service account (e.g.             | string                 | Maximum length: 285    |                        |
|                           | \"account-id@sampledomain.com\"). |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| name                      | Name.                             | string                 | Maximum length: 35     |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| traffic-vdom              | Vdom used to communicate with     | string                 | Maximum length: 31     |                        |
|                           | cloud service.                    |                        |                        |                        |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
| vendor                    | Cloud service vendor.             | option                 | \-                     | unknown                |
+---------------------------+-----------------------------------+------------------------+------------------------+------------------------+
|                           | +--------------------+--------------------------------------------------------+                              |
|                           | | Option             | Description                                            |                              |
|                           | +====================+========================================================+                              |
|                           | | *unknown*          | Unknown type of cloud service vendor.                  |                              |
|                           | +--------------------+--------------------------------------------------------+                              |
|                           | | *google-cloud-kms* | Google Cloud KMS service.                              |                              |
|                           | +--------------------+--------------------------------------------------------+                              |
+---------------------------+--------------------------------------------------------------------------------------------------------------+

