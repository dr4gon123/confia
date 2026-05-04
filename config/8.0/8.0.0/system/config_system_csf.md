# config system csf

Add this FortiGate to a Security Fabric or set up a new Security Fabric on this FortiGate.

## Syntax

```
config system csf
    Description: Add this FortiGate to a Security Fabric or set up a new Security Fabric on this FortiGate.
    set accept-auth-by-cert [disable|enable]
    set authorization-request-type [serial|certificate]
    set autoclear-removed-shared-objects [enable|disable]
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
    config fabric-datasource-exemption
        Description: Disable the fabric datasource check on the tables when synchronizing them.
        edit <name>
            set status [enable|disable]
        next
    end
    set fabric-object-change-auto-cascade [enable|disable]
    set fabric-object-unification [default|local]
    set fabric-workers {integer}
    set file-mgmt [enable|disable]
    set file-quota {integer}
    set file-quota-warning {integer}
    set forticloud-account-enforcement [enable|disable]
    set group-name {string}
    set group-password {password}
    set legacy-authentication [disable|enable]
    set log-unification [disable|enable]
    set saml-configuration-sync [default|local]
    config shared-objects
        Description: Fabric-wide objects shared by non-root nodes.
        edit <name>
            config objects
                Description: CMDB table entries.
                edit <pathname>
                    config keys
                        Description: Keys of CMDB table entries.
                        edit <name>
                        next
                    end
                next
            end
            set trusted-list-entry {string}
        next
    end
    set source-ip {ipv4-address}
    set status [enable|disable]
    config trusted-list
        Description: Pre-authorized and blocked security fabric nodes.
        edit <name>
            set action [accept|deny]
            set ca {string}
            set ca-fingerprint {string}
            set cn {string}
            set index {integer}
            set role [downstream|upstream]
        next
    end
    set uid {string}
    set upload-shared-objects [enable|disable]
    set upstream {string}
    set upstream-interface {string}
    set upstream-interface-select-method [auto|sdwan|...]
    set upstream-port {integer}
end
```

## Parameters

+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| Parameter                         | Description                       | Type                 | Size                 | Default              |
+===================================+===================================+======================+======================+======================+
| accept-auth-by-cert               | Accept connections with unknown   | option               | \-                   | enable               |
|                                   | certificates and ask admin for    |                      |                      |                      |
|                                   | approval.                         |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *disable*   | Do not accept SSL connections with unknown             |                               |
|                                   | |             | certificates.                                          |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *enable*    | Accept SSL connections without automatic certificate   |                               |
|                                   | |             | verification.                                          |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| authorization-request-type        | Authorization request type.       | option               | \-                   | certificate \*\*     |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +---------------+--------------------------------------------------------+                             |
|                                   | | Option        | Description                                            |                             |
|                                   | +===============+========================================================+                             |
|                                   | | *serial*      | Request verification by serial number.                 |                             |
|                                   | +---------------+--------------------------------------------------------+                             |
|                                   | | *certificate* | Request verification by certificate.                   |                             |
|                                   | +---------------+--------------------------------------------------------+                             |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| autoclear-removed-shared-objects  | Control system behavior for       | option               | \-                   | enable               |
| \*                                | deleted shared objects.           |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable automatic clearing of configuration related to  |                               |
|                                   | |             | deleted shared objects.                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable automatic clearing of configuration related to |                               |
|                                   | |             | deleted shared objects.                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| certificate                       | Certificate.                      | string               | Maximum length: 35   | Fortinet_Factory     |
|                                   |                                   |                      |                      | \*\*                 |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| configuration-sync                | Configuration sync mode.          | option               | \-                   | default              |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *default*   | Synchronize configuration for IPAM, FortiAnalyzer,     |                               |
|                                   | |             | FortiSandbox, and Central Management to root node.     |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *local*     | Do not synchronize configuration with root node.       |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| downstream-access                 | Enable/disable downstream device  | option               | \-                   | disable              |
|                                   | access to this device\'s          |                      |                      |                      |
|                                   | configuration and data.           |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable downstream device access to this device\'s      |                               |
|                                   | |             | configuration and data.                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable downstream device access to this device\'s     |                               |
|                                   | |             | configuration and data.                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| downstream-accprofile             | Default access profile for        | string               | Maximum length: 35   |                      |
|                                   | requests from downstream devices. |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fabric-object-change-auto-cascade | Enable/disable the cascade mode   | option               | \-                   | disable              |
| \*                                | for fabric objects datasource     |                      |                      |                      |
|                                   | check.                            |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable the fabric datasource check cascade mode. This  |                               |
|                                   | |             | will change all related datasource to be a             |                               |
|                                   | |             | fabric-enabled object when setting an entry to         |                               |
|                                   | |             | fabric-enabled.                                        |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable the fabric datasource check cascade mode. This |                               |
|                                   | |             | will no longer change all related datasource to be a   |                               |
|                                   | |             | fabric-enabled object when setting an entry to         |                               |
|                                   | |             | fabric-enabled.                                        |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fabric-object-unification         | Fabric CMDB Object Unification.   | option               | \-                   | default              |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *default*   | Global CMDB objects will be synchronized in Security   |                               |
|                                   | |             | Fabric.                                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *local*     | Global CMDB objects will not be synchronized to and    |                               |
|                                   | |             | from this device.                                      |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| fabric-workers                    | Number of worker processes for    | integer              | Minimum value: 1     | 2                    |
|                                   | Security Fabric daemon.           |                      | Maximum value: 4     |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-mgmt                         | Enable/disable Security Fabric    | option               | \-                   | enable               |
|                                   | daemon file management.           |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable daemon file management.                         |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable daemon file management.                        |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-quota                        | Maximum amount of memory that can | integer              | Minimum value: 0     | 0                    |
|                                   | be used by the daemon files (in   |                      | Maximum value:       |                      |
|                                   | bytes).                           |                      | 4294967295           |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| file-quota-warning                | Warn when the set percentage of   | integer              | Minimum value: 1     | 90                   |
|                                   | quota has been used.              |                      | Maximum value: 99    |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| forticloud-account-enforcement    | Fabric FortiCloud account         | option               | \-                   | enable               |
|                                   | unification.                      |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable FortiCloud account ID matching for Security     |                               |
|                                   | |             | Fabric.                                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable FortiCloud accound ID matching for Security    |                               |
|                                   | |             | Fabric.                                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| group-name                        | Security Fabric group name. All   | string               | Maximum length: 35   |                      |
|                                   | FortiGates in a Security Fabric   |                      |                      |                      |
|                                   | must have the same group name.    |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| group-password                    | Security Fabric group password.   | password             | Not Specified        |                      |
|                                   | For legacy authentication, fabric |                      |                      |                      |
|                                   | members must have the same group  |                      |                      |                      |
|                                   | password.                         |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| legacy-authentication             | Enable/disable legacy             | option               | \-                   | disable              |
|                                   | authentication.                   |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *disable*   | Do not accept legacy authentication requests.          |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *enable*    | Accept legacy authentication requests.                 |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| log-unification                   | Enable/disable broadcast of       | option               | \-                   | enable               |
|                                   | discovery messages for log        |                      |                      |                      |
|                                   | unification.                      |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *disable*   | Disable broadcast of discovery messages for log        |                               |
|                                   | |             | unification.                                           |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *enable*    | Enable broadcast of discovery messages for log         |                               |
|                                   | |             | unification.                                           |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| saml-configuration-sync           | SAML setting configuration        | option               | \-                   | default              |
|                                   | synchronization.                  |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *default*   | SAML setting for fabric members is created by fabric   |                               |
|                                   | |             | root.                                                  |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *local*     | Do not apply SAML configuration generated by root.     |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| source-ip                         | Source IP address for             | ipv4-address         | Not Specified        | 0.0.0.0              |
|                                   | communication with the upstream   |                      |                      |                      |
|                                   | FortiGate.                        |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| status                            | Enable/disable Security Fabric.   | option               | \-                   | disable              |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable Security Fabric.                                |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable Security Fabric.                               |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| uid                               | Unique ID of the current CSF node | string               | Maximum length: 35   |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upload-shared-objects \*          | Configure uploading shared        | option               | \-                   | enable               |
|                                   | objects entries to the tree.      |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *enable*    | Enable sharing objects referenced in shared-object     |                               |
|                                   | |             | table within the fabric tree.                          |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *disable*   | Disable sharing objects referenced in shared-object    |                               |
|                                   | |             | table within the fabric tree.                          |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream                          | IP/FQDN of the FortiGate upstream | string               | Maximum length: 255  |                      |
|                                   | from this FortiGate in the        |                      |                      |                      |
|                                   | Security Fabric.                  |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-interface                | Specify outgoing interface to     | string               | Maximum length: 15   |                      |
|                                   | reach server.                     |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-interface-select-method  | Specify how to select outgoing    | option               | \-                   | auto                 |
|                                   | interface to reach server.        |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | Option      | Description                                            |                               |
|                                   | +=============+========================================================+                               |
|                                   | | *auto*      | Set outgoing interface automatically.                  |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                               |
|                                   | |             | rules.                                                 |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
|                                   | | *specify*   | Set outgoing interface manually.                       |                               |
|                                   | +-------------+--------------------------------------------------------+                               |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+
| upstream-port                     | The port number to use to         | integer              | Minimum value: 1     | 8013                 |
|                                   | communicate with the FortiGate    |                      | Maximum value: 65535 |                      |
|                                   | upstream from this FortiGate in   |                      |                      |                      |
|                                   | the Security Fabric (default =    |                      |                      |                      |
|                                   | 8013).                            |                      |                      |                      |
+-----------------------------------+-----------------------------------+----------------------+----------------------+----------------------+

