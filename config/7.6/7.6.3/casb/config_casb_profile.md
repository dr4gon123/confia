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
                config access-rule
                    Description: CASB profile access rule.
                    edit <name>
                        set action [monitor|bypass|...]
                        config attribute-filter
                            Description: CASB profile attribute filter.
                            edit <id>
                                set action [monitor|bypass|...]
                                set attribute-match {string}
                            next
                        end
                        set bypass {option1}, {option2}, ...
                    next
                end
                config advanced-tenant-control
                    Description: CASB profile advanced tenant control.
                    edit <name>
                        config attribute
                            Description: CASB advanced tenant control attribute.
                            edit <name>
                                set input <value1>, <value2>, ...
                            next
                        end
                    next
                end
                config custom-control
                    Description: CASB profile custom control.
                    edit <name>
                        config attribute-filter
                            Description: CASB attribute filter.
                            edit <id>
                                set action [monitor|bypass|...]
                                set attribute-match {string}
                            next
                        end
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

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| comment   | Comment.                          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | CASB profile name.                | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 47      |         |
+-----------+-----------------------------------+------------+---------+---------+

