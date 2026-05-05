# config system csf

Add this FortiGate to a Security Fabric or set up a new Security Fabric on this FortiGate.

## Syntax

```
config system csf
    Description: Add this FortiGate to a Security Fabric or set up a new Security Fabric on this FortiGate.
    set accept-auth-by-cert [disable|enable]
    set authorization-request-type [serial|certificate]
    set certificate {string}
    set configuration-sync [default|local]
    set downstream-access [enable|disable]
    set downstream-accprofile {string}
    config fabric-connector
        Description: Fabric connector configuration.
        edit <serial>
            set accprofile {string}
            set configuration-write-access [enable|disable]
            set vdom <name1>, <name2>, ...
        next
    end
    set fabric-object-unification [default|local]
    set fabric-workers {integer}
    set file-mgmt [enable|disable]
    set file-quota {integer}
    set file-quota-warning {integer}
    set forticloud-account-enforcement [enable|disable]
    set group-name {string}
    set group-password {password}
    set log-unification [disable|enable]
    set saml-configuration-sync [default|local]
    set source-ip {ipv4-address}
    set status [enable|disable]
    config trusted-list
        Description: Pre-authorized and blocked security fabric nodes.
        edit <name>
            set authorization-type [serial|certificate]
            set serial {string}
            set certificate {var-string}
            set action [accept|deny]
            set ha-members {string}
            set downstream-authorization [enable|disable]
            set index {integer}
        next
    end
    set uid {string}
    set upstream {string}
    set upstream-interface {string}
    set upstream-interface-select-method [auto|sdwan|...]
    set upstream-port {integer}
end
```

## Parameters

+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter                        | Description                       | Type                 | Size                 | Default              |
+==================================+===================================+======================+======================+======================+
| accept-auth-by-cert              | Accept connections with unknown   | option               | \-                   | enable               |
|                                  | certificates and ask admin for    |                      |                      |                      |
|                                  | approval.                         |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *disable*   | Do not accept SSL connections with unknown             |                               |
|                                  | |             | certificates.                                          |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *enable*    | Accept SSL connections without automatic certificate   |                               |
|                                  | |             | verification.                                          |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| authorization-request-type       | Authorization request type.       | option               | \-                   | serial               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +---------------+--------------------------------------------------------+                             |
|                                  | | Option        | Description                                            |                             |
|                                  | +===============+========================================================+                             |
|                                  | | *serial*      | Request verification by serial number.                 |                             |
|                                  | +---------------+--------------------------------------------------------+                             |
|                                  | | *certificate* | Request verification by certificate.                   |                             |
|                                  | +---------------+--------------------------------------------------------+                             |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| certificate                      | Certificate.                      | string               | Maximum length: 35   |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| configuration-sync               | Configuration sync mode.          | option               | \-                   | default              |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *default*   | Synchronize configuration for IPAM, FortiAnalyzer,     |                               |
|                                  | |             | FortiSandbox, and Central Management to root node.     |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *local*     | Do not synchronize configuration with root node.       |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| downstream-access                | Enable/disable downstream device  | option               | \-                   | disable              |
|                                  | access to this device\'s          |                      |                      |                      |
|                                  | configuration and data.           |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *enable*    | Enable downstream device access to this device\'s      |                               |
|                                  | |             | configuration and data.                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *disable*   | Disable downstream device access to this device\'s     |                               |
|                                  | |             | configuration and data.                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| downstream-accprofile            | Default access profile for        | string               | Maximum length: 35   |                      |
|                                  | requests from downstream devices. |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fabric-object-unification        | Fabric CMDB Object Unification.   | option               | \-                   | default              |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *default*   | Global CMDB objects will be synchronized in Security   |                               |
|                                  | |             | Fabric.                                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *local*     | Global CMDB objects will not be synchronized to and    |                               |
|                                  | |             | from this device.                                      |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fabric-workers                   | Number of worker processes for    | integer              | Minimum value: 1     | 2                    |
|                                  | Security Fabric daemon.           |                      | Maximum value: 4     |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-mgmt                        | Enable/disable Security Fabric    | option               | \-                   | enable               |
|                                  | daemon file management.           |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *enable*    | Enable daemon file management.                         |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *disable*   | Disable daemon file management.                        |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-quota                       | Maximum amount of memory that can | integer              | Minimum value: 0     | 0                    |
|                                  | be used by the daemon files (in   |                      | Maximum value:       |                      |
|                                  | bytes).                           |                      | 4294967295           |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-quota-warning               | Warn when the set percentage of   | integer              | Minimum value: 1     | 90                   |
|                                  | quota has been used.              |                      | Maximum value: 99    |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| forticloud-account-enforcement   | Fabric FortiCloud account         | option               | \-                   | enable               |
|                                  | unification.                      |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *enable*    | Enable FortiCloud account ID matching for Security     |                               |
|                                  | |             | Fabric.                                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *disable*   | Disable FortiCloud accound ID matching for Security    |                               |
|                                  | |             | Fabric.                                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| group-name                       | Security Fabric group name. All   | string               | Maximum length: 35   |                      |
|                                  | FortiGates in a Security Fabric   |                      |                      |                      |
|                                  | must have the same group name.    |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| group-password                   | Security Fabric group password.   | password             | Not Specified        |                      |
|                                  | All FortiGates in a Security      |                      |                      |                      |
|                                  | Fabric must have the same group   |                      |                      |                      |
|                                  | password.                         |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| log-unification                  | Enable/disable broadcast of       | option               | \-                   | enable               |
|                                  | discovery messages for log        |                      |                      |                      |
|                                  | unification.                      |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *disable*   | Disable broadcast of discovery messages for log        |                               |
|                                  | |             | unification.                                           |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *enable*    | Enable broadcast of discovery messages for log         |                               |
|                                  | |             | unification.                                           |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| saml-configuration-sync          | SAML setting configuration        | option               | \-                   | default              |
|                                  | synchronization.                  |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *default*   | SAML setting for fabric members is created by fabric   |                               |
|                                  | |             | root.                                                  |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *local*     | Do not apply SAML configuration generated by root.     |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| source-ip                        | Source IP address for             | ipv4-address         | Not Specified        | 0.0.0.0              |
|                                  | communication with the upstream   |                      |                      |                      |
|                                  | FortiGate.                        |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| status                           | Enable/disable Security Fabric.   | option               | \-                   | disable              |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *enable*    | Enable Security Fabric.                                |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *disable*   | Disable Security Fabric.                               |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| uid                              | Unique ID of the current CSF node | string               | Maximum length: 35   |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream                         | IP/FQDN of the FortiGate upstream | string               | Maximum length: 255  |                      |
|                                  | from this FortiGate in the        |                      |                      |                      |
|                                  | Security Fabric.                  |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-interface               | Specify outgoing interface to     | string               | Maximum length: 15   |                      |
|                                  | reach server.                     |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-interface-select-method | Specify how to select outgoing    | option               | \-                   | auto                 |
|                                  | interface to reach server.        |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | Option      | Description                                            |                               |
|                                  | +=============+========================================================+                               |
|                                  | | *auto*      | Set outgoing interface automatically.                  |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                               |
|                                  | |             | rules.                                                 |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
|                                  | | *specify*   | Set outgoing interface manually.                       |                               |
|                                  | +-------------+--------------------------------------------------------+                               |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-port                    | The port number to use to         | integer              | Minimum value: 1     | 8013                 |
|                                  | communicate with the FortiGate    |                      | Maximum value: 65535 |                      |
|                                  | upstream from this FortiGate in   |                      |                      |                      |
|                                  | the Security Fabric.              |                      |                      |                      |
+----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+

