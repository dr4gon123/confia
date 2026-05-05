# config wireless-controller hotspot20 anqp-nai-realm

Configure network access identifier (NAI) realm.

## Syntax

```
config wireless-controller hotspot20 anqp-nai-realm
    Description: Configure network access identifier (NAI) realm.
    edit <name>
        config nai-list
            Description: NAI list.
            edit <name>
                config eap-method
                    Description: EAP Methods.
                    edit <index>
                        config auth-param
                            Description: EAP auth param.
                            edit <index>
                                set id [non-eap-inner-auth|inner-auth-eap|...]
                                set val [eap-identity|eap-md5|...]
                            next
                        end
                        set method [eap-identity|eap-md5|...]
                    next
                end
                set encoding [disable|enable]
                set nai-realm {string}
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | NAI realm list name.              | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

