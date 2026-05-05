# config casb profile

Configure CASB profile.

## Syntax

```
config casb profile
    Description: Configure CASB profile.
    edit <name>
        set comment {var-string}
        config saas-application
            Description: CASB profile SaaS application.
            edit <name>
                set status [enable|disable]
                set safe-search [enable|disable]
                set safe-search-control <name1>, <name2>, ...
                set tenant-control [enable|disable]
                set tenant-control-tenants <name1>, <name2>, ...
                set domain-control [enable|disable]
                set domain-control-domains <name1>, <name2>, ...
                set log [enable|disable]
                config access-rule
                    Description: CASB profile access rule.
                    edit <name>
                        set action [monitor|bypass|...]
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
            next
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| comment   | Comment.                          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | CASB profile name.                | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+

