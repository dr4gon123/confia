# config wireless-controller snmp

Configure SNMP.

## Syntax

```
config wireless-controller snmp
    Description: Configure SNMP.
    config community
        Description: SNMP Community Configuration.
        edit <id>
            set name {string}
            set status [enable|disable]
            set query-v1-status [enable|disable]
            set query-v2c-status [enable|disable]
            set trap-v1-status [enable|disable]
            set trap-v2c-status [enable|disable]
            config hosts
                Description: Configure IPv4 SNMP managers (hosts).
                edit <id>
                    set ip {user}
                next
            end
        next
    end
    set contact-info {string}
    set engine-id {string}
    set trap-high-cpu-threshold {integer}
    set trap-high-mem-threshold {integer}
    config user
        Description: SNMP User Configuration.
        edit <name>
            set status [enable|disable]
            set queries [enable|disable]
            set trap-status [enable|disable]
            set security-level [no-auth-no-priv|auth-no-priv|...]
            set auth-proto [md5|sha]
            set auth-pwd {password}
            set priv-proto [aes|des|...]
            set priv-pwd {password}
            set notify-hosts {ipv4-address}
        next
    end
end
```

## Parameters

+-------------------------+-----------------------------------+---------+---------+---------+
| Parameter               | Description                       | Type    | Size    | Default |
+=========================+===================================+=========+=========+=========+
| contact-info            | Contact Information.              | string  | Maximum |         |
|                         |                                   |         | length: |         |
|                         |                                   |         | 31      |         |
+-------------------------+-----------------------------------+---------+---------+---------+
| engine-id               | AC SNMP engineID string (maximum  | string  | Maximum |         |
|                         | 24 characters).                   |         | length: |         |
|                         |                                   |         | 23      |         |
+-------------------------+-----------------------------------+---------+---------+---------+
| trap-high-cpu-threshold | CPU usage when trap is sent.      | integer | Minimum | 80      |
|                         |                                   |         | value:  |         |
|                         |                                   |         | 10      |         |
|                         |                                   |         | Maximum |         |
|                         |                                   |         | value:  |         |
|                         |                                   |         | 100     |         |
+-------------------------+-----------------------------------+---------+---------+---------+
| trap-high-mem-threshold | Memory usage when trap is sent.   | integer | Minimum | 80      |
|                         |                                   |         | value:  |         |
|                         |                                   |         | 10      |         |
|                         |                                   |         | Maximum |         |
|                         |                                   |         | value:  |         |
|                         |                                   |         | 100     |         |
+-------------------------+-----------------------------------+---------+---------+---------+

