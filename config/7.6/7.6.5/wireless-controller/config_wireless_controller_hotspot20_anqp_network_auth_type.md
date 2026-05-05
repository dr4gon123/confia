# config wireless-controller hotspot20 anqp-network-auth-type

Configure network authentication type.

## Syntax

```
config wireless-controller hotspot20 anqp-network-auth-type
    Description: Configure network authentication type.
    edit <name>
        set auth-type [acceptance-of-terms|online-enrollment|...]
        set url {string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------------------+------------------------+------------------------+
| Parameter | Description                       | Type                   | Size                   | Default                |
+===========+===================================+========================+========================+========================+
| auth-type | Network authentication type.      | option                 | \-                     | acceptance-of-terms    |
+-----------+-----------------------------------+------------------------+------------------------+------------------------+
|           | +-----------------------+--------------------------------------------------------+                           |
|           | | Option                | Description                                            |                           |
|           | +=======================+========================================================+                           |
|           | | *acceptance-of-terms* | Acceptance of terms and conditions.                    |                           |
|           | +-----------------------+--------------------------------------------------------+                           |
|           | | *online-enrollment*   | Online enrollment supported.                           |                           |
|           | +-----------------------+--------------------------------------------------------+                           |
|           | | *http-redirection*    | HTTP and HTTPS redirection.                            |                           |
|           | +-----------------------+--------------------------------------------------------+                           |
|           | | *dns-redirection*     | DNS redirection.                                       |                           |
|           | +-----------------------+--------------------------------------------------------+                           |
+-----------+-----------------------------------+------------------------+------------------------+------------------------+
| name      | Authentication type name.         | string                 | Maximum length: 35     |                        |
+-----------+-----------------------------------+------------------------+------------------------+------------------------+
| url       | Redirect URL.                     | string                 | Maximum length: 255    |                        |
+-----------+-----------------------------------+------------------------+------------------------+------------------------+

