# config casb profile

Configure CASB profile.

## Syntax

```
config casb profile
    Description: Configure CASB profile.
    edit <name>
        config saas-application
            Description: CASB profile SaaS application.
            edit <name>
                config access-rule
                    Description: CASB profile access rule.
                    edit <name>
                        set action [bypass|block|...]
                        set bypass {option1}, {option2}, ...
                    next
                end
                config custom-control
                    Description: CASB profile custom control.
                    edit <name>
                        config option
                            Description: CASB custom control option.
                            edit <name>
                                set user-input <value1>, <value2>, ...
                            next
                        end
                    next
                end
                set domain-control [enable|disable]
                set domain-control-domains <name1>, <name2>, ...
                set log [enable|disable]
                set safe-search [enable|disable]
                set safe-search-control <name1>, <name2>, ...
                set status [enable|disable]
                set tenant-control [enable|disable]
                set tenant-control-tenants <name1>, <name2>, ...
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | CASB profile name.                | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 35      |         |
+-----------+-----------------------------------+--------+---------+---------+

