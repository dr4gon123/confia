# config wireless-controller apcfg-profile

Configure AP local configuration profiles.

## Syntax

```
config wireless-controller apcfg-profile
    Description: Configure AP local configuration profiles.
    edit <name>
        set ac-ip {ipv4-address}
        set ac-port {integer}
        set ac-timer {integer}
        set ac-type [default|specify|...]
        set ap-family [fap|fap-u|...]
        config command-list
            Description: AP local configuration command list.
            edit <id>
                set name {string}
                set passwd-value {password}
                set type [non-password|password]
                set value {string}
            next
        end
        set comment {var-string}
    next
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| ac-ip     | IP address of the validation      | ipv4-address       | Not Specified      | 0.0.0.0            |
|           | controller that AP must be able   |                    |                    |                    |
|           | to join after applying AP local   |                    |                    |                    |
|           | configuration.                    |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| ac-port   | Port of the validation controller | integer            | Minimum value:     | 5246               |
|           | that AP must be able to join      |                    | 1024 Maximum       |                    |
|           | after applying AP local           |                    | value: 49150       |                    |
|           | configuration (1024 - 49150,      |                    |                    |                    |
|           | default = 5246).                  |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| ac-timer  | Maximum waiting time for the AP   | integer            | Minimum value: 3   | 10                 |
|           | to join the validation controller |                    | Maximum value: 30  |                    |
|           | after applying AP local           |                    |                    |                    |
|           | configuration (3 - 30 min,        |                    |                    |                    |
|           | default = 10).                    |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| ac-type   | Validation controller type        | option             | \-                 | default            |
|           | (default = default).              |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *default*   | This controller is the one and only controller that    |                         |
|           | |             | the AP could join after applying AP local              |                         |
|           | |             | configuration.                                         |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *specify*   | Specified controller is the one and only controller    |                         |
|           | |             | that the AP could join after applying AP local         |                         |
|           | |             | configuration.                                         |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *apcfg*     | Any controller defined by AP local configuration after |                         |
|           | |             | applying AP local configuration.                       |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| ap-family | FortiAP family type (default =    | option             | \-                 | fap                |
|           | fap).                             |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *fap*       | FortiAP Family.                                        |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *fap-u*     | FortiAP-U Family.                                      |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *fap-c*     | FortiAP-C Family.                                      |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| comment   | Comment.                          | var-string         | Maximum length:    |                    |
|           |                                   |                    | 255                |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| name      | AP local configuration profile    | string             | Maximum length: 35 |                    |
|           | name.                             |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+

