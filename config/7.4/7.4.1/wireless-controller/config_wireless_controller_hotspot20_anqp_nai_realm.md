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
                set encoding [disable|enable]
                set nai-realm {string}
                config eap-method
                    Description: EAP Methods.
                    edit <index>
                        set method [eap-identity|eap-md5|...]
                        config auth-param
                            Description: EAP auth param.
                            edit <index>
                                set id [non-eap-inner-auth|inner-auth-eap|...]
                                set val [eap-identity|eap-md5|...]
                            next
                        end
                    next
                end
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

