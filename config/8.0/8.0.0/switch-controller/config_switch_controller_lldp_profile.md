# config switch-controller lldp-profile

Configure FortiSwitch LLDP profiles.

## Syntax

```
config switch-controller lldp-profile
    Description: Configure FortiSwitch LLDP profiles.
    edit <name>
        set 802 1-tlvs {option1}, {option2}, ...
        set 802 3-tlvs {option1}, {option2}, ...
        set auto-isl [disable|enable]
        set auto-isl-auth [legacy|strict|...]
        set auto-isl-auth-encrypt [none|mixed|...]
        set auto-isl-auth-identity {string}
        set auto-isl-auth-macsec-profile {string}
        set auto-isl-auth-reauth {integer}
        set auto-isl-auth-user {string}
        set auto-isl-hello-timer {integer}
        set auto-isl-port-group {integer}
        set auto-isl-receive-timeout {integer}
        set auto-mclag-icl [disable|enable]
        config custom-tlvs
            Description: Configuration method to edit custom TLV entries.
            edit <name>
                set information-string {user}
                set oui {user}
                set subtype {integer}
            next
        end
        config med-location-service
            Description: Configuration method to edit Media Endpoint Discovery (MED) location service type-length-value (TLV) categories.
            edit <name>
                set status [disable|enable]
                set sys-location-id {string}
            next
        end
        config med-network-policy
            Description: Configuration method to edit Media Endpoint Discovery (MED) network policy type-length-value (TLV) categories.
            edit <name>
                set assign-vlan [disable|enable]
                set dscp {integer}
                set priority {integer}
                set status [disable|enable]
                set vlan-intf {string}
            next
        end
        set med-tlvs {option1}, {option2}, ...
    next
end
```

## Parameters

+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| Parameter                    | Description                       | Type                    | Size                    | Default                 |
+==============================+===================================+=========================+=========================+=========================+
| 802 1-tlvs                   | Transmitted IEEE 802.1 TLVs.      | option                  | \-                      |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +----------------+--------------------------------------------------------+                                     |
|                              | | Option         | Description                                            |                                     |
|                              | +================+========================================================+                                     |
|                              | | *port-vlan-id* | Port native VLAN TLV.                                  |                                     |
|                              | +----------------+--------------------------------------------------------+                                     |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| 802 3-tlvs                   | Transmitted IEEE 802.3 TLVs.      | option                  | \-                      |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +---------------------+--------------------------------------------------------+                                |
|                              | | Option              | Description                                            |                                |
|                              | +=====================+========================================================+                                |
|                              | | *max-frame-size*    | Maximum frame size TLV.                                |                                |
|                              | +---------------------+--------------------------------------------------------+                                |
|                              | | *power-negotiation* | PoE+ classification TLV.                               |                                |
|                              | +---------------------+--------------------------------------------------------+                                |
|                              | | *eee-negotiation*   | Energy Efficient Ethernet TLV.                         |                                |
|                              | +---------------------+--------------------------------------------------------+                                |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl                     | Enable/disable auto inter-switch  | option                  | \-                      | enable                  |
|                              | LAG.                              |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | Option      | Description                                            |                                        |
|                              | +=============+========================================================+                                        |
|                              | | *disable*   | Disable automatic MCLAG inter chassis link.            |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *enable*    | Enable automatic MCLAG inter chassis link.             |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth                | Auto inter-switch LAG             | option                  | \-                      | legacy                  |
|                              | authentication mode.              |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | Option      | Description                                            |                                        |
|                              | +=============+========================================================+                                        |
|                              | | *legacy*    | No auto inter-switch-LAG authentication.               |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *strict*    | Strict auto inter-switch-LAG authentication.           |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *relax*     | Relax auto inter-switch-LAG authentication.            |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth-encrypt        | Auto inter-switch LAG encryption  | option                  | \-                      | none                    |
|                              | mode.                             |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | Option      | Description                                            |                                        |
|                              | +=============+========================================================+                                        |
|                              | | *none*      | No auto inter-switch-LAG encryption.                   |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *mixed*     | Mixed auto inter-switch-LAG encryption.                |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *must*      | Must auto inter-switch-LAG encryption.                 |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth-identity       | Auto inter-switch LAG             | string                  | Maximum length: 63      |                         |
|                              | authentication identity.          |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth-macsec-profile | Auto inter-switch LAG macsec      | string                  | Maximum length: 63      |                         |
|                              | profile for encryption.           |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth-reauth         | Auto inter-switch LAG             | integer                 | Minimum value: 180      | 3600                    |
|                              | authentication reauth period in   |                         | Maximum value: 3600     |                         |
|                              | seconds(10 - 3600, default =      |                         |                         |                         |
|                              | 3600).                            |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-auth-user           | Auto inter-switch LAG             | string                  | Maximum length: 63      |                         |
|                              | authentication user certificate.  |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-hello-timer         | Auto inter-switch LAG hello timer | integer                 | Minimum value: 1        | 3                       |
|                              | duration (1 - 30 sec, default =   |                         | Maximum value: 30       |                         |
|                              | 3).                               |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-port-group          | Auto inter-switch LAG port group  | integer                 | Minimum value: 0        | 0                       |
|                              | ID (0 - 9).                       |                         | Maximum value: 9        |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-isl-receive-timeout     | Auto inter-switch LAG timeout if  | integer                 | Minimum value: 0        | 60                      |
|                              | no response is received (3 - 90   |                         | Maximum value: 90       |                         |
|                              | sec, default = 9).                |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| auto-mclag-icl               | Enable/disable MCLAG inter        | option                  | \-                      | disable                 |
|                              | chassis link.                     |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | Option      | Description                                            |                                        |
|                              | +=============+========================================================+                                        |
|                              | | *disable*   | Disable auto inter-switch-LAG.                         |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
|                              | | *enable*    | Enable auto inter-switch-LAG.                          |                                        |
|                              | +-------------+--------------------------------------------------------+                                        |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| med-tlvs                     | Transmitted LLDP-MED TLVs         | option                  | \-                      |                         |
|                              | (type-length-value descriptions). |                         |                         |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
|                              | +---------------------------+--------------------------------------------------------+                          |
|                              | | Option                    | Description                                            |                          |
|                              | +===========================+========================================================+                          |
|                              | | *inventory-management*    | Inventory management TLVs.                             |                          |
|                              | +---------------------------+--------------------------------------------------------+                          |
|                              | | *network-policy*          | Network policy TLVs.                                   |                          |
|                              | +---------------------------+--------------------------------------------------------+                          |
|                              | | *power-management*        | Power manangement TLVs.                                |                          |
|                              | +---------------------------+--------------------------------------------------------+                          |
|                              | | *location-identification* | Location identificaion TLVs.                           |                          |
|                              | +---------------------------+--------------------------------------------------------+                          |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+
| name                         | Profile name.                     | string                  | Maximum length: 63      |                         |
+------------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------+

