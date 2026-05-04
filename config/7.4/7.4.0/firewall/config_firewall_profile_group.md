# config firewall profile-group

Configure profile groups.

## Syntax

```
config firewall profile-group
    Description: Configure profile groups.
    edit <name>
        set application-list {string}
        set av-profile {string}
        set cifs-profile {string}
        set dlp-profile {string}
        set dnsfilter-profile {string}
        set emailfilter-profile {string}
        set file-filter-profile {string}
        set icap-profile {string}
        set ips-sensor {string}
        set ips-voip-filter {string}
        set profile-protocol-options {string}
        set sctp-filter-profile {string}
        set ssh-filter-profile {string}
        set ssl-ssh-profile {string}
        set videofilter-profile {string}
        set voip-profile {string}
        set waf-profile {string}
        set webfilter-profile {string}
    next
end
```

## Parameters

+--------------------------+-----------------------------------+--------+---------+------------------------+
| Parameter                | Description                       | Type   | Size    | Default                |
+==========================+===================================+========+=========+========================+
| application-list         | Name of an existing Application   | string | Maximum |                        |
|                          | list.                             |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| av-profile               | Name of an existing Antivirus     | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| cifs-profile             | Name of an existing CIFS profile. | string | Maximum |                        |
|                          |                                   |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| dlp-profile              | Name of an existing DLP profile.  | string | Maximum |                        |
|                          |                                   |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| dnsfilter-profile        | Name of an existing DNS filter    | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| emailfilter-profile      | Name of an existing email filter  | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| file-filter-profile      | Name of an existing file-filter   | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| icap-profile             | Name of an existing ICAP profile. | string | Maximum |                        |
|                          |                                   |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| ips-sensor               | Name of an existing IPS sensor.   | string | Maximum |                        |
|                          |                                   |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| ips-voip-filter          | Name of an existing VoIP (ips)    | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| name                     | Profile group name.               | string | Maximum |                        |
|                          |                                   |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| profile-protocol-options | Name of an existing Protocol      | string | Maximum | default                |
|                          | options profile.                  |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| sctp-filter-profile      | Name of an existing SCTP filter   | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| ssh-filter-profile       | Name of an existing SSH filter    | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| ssl-ssh-profile          | Name of an existing SSL SSH       | string | Maximum | certificate-inspection |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| videofilter-profile      | Name of an existing VideoFilter   | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| voip-profile             | Name of an existing VoIP (voipd)  | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| waf-profile              | Name of an existing Web           | string | Maximum |                        |
|                          | application firewall profile.     |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+
| webfilter-profile        | Name of an existing Web filter    | string | Maximum |                        |
|                          | profile.                          |        | length: |                        |
|                          |                                   |        | 35      |                        |
+--------------------------+-----------------------------------+--------+---------+------------------------+

