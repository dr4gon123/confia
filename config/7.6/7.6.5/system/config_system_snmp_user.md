# config system snmp user

SNMP user configuration.

## Syntax

```
config system snmp user
    Description: SNMP user configuration.
    edit <name>
        set auth-proto [md5|sha|...]
        set auth-pwd {password}
        set events {option1}, {option2}, ...
        set ha-direct [enable|disable]
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set mib-view {string}
        set notify-hosts {ipv4-address}
        set notify-hosts6 {ipv6-address}
        set priv-proto [aes|des|...]
        set priv-pwd {password}
        set queries [enable|disable]
        set query-port {integer}
        set security-level [no-auth-no-priv|auth-no-priv|...]
        set source-ip {ipv4-address}
        set source-ipv6 {ipv6-address}
        set status [enable|disable]
        set trap-lport {integer}
        set trap-rport {integer}
        set trap-status [enable|disable]
        set vdoms <name1>, <name2>, ...
        set vrf-select {integer}
    next
end
```

## Parameters

+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| Parameter               | Description                       | Type                    | Size                    | Default                       |
+=========================+===================================+=========================+=========================+===============================+
| auth-proto              | Authentication protocol.          | option                  | \-                      | sha                           |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *md5*       | HMAC-MD5-96 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sha*       | HMAC-SHA-96 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sha224*    | HMAC-SHA224 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sha256*    | HMAC-SHA256 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sha384*    | HMAC-SHA384 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sha512*    | HMAC-SHA512 authentication protocol.                   |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| auth-pwd                | Password for authentication       | password                | Not Specified           |                               |
|                         | protocol.                         |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| events                  | SNMP notifications (traps) to     | option                  | \-                      | cpu-high mem-low log-full     |
|                         | send.                             |                         |                         | intf-ip vpn-tun-up            |
|                         |                                   |                         |                         | vpn-tun-down ha-switch        |
|                         |                                   |                         |                         | ha-hb-failure ips-signature   |
|                         |                                   |                         |                         | ips-anomaly av-virus          |
|                         |                                   |                         |                         | av-oversize av-pattern        |
|                         |                                   |                         |                         | av-fragmented fm-if-change    |
|                         |                                   |                         |                         | bgp-established               |
|                         |                                   |                         |                         | bgp-backward-transition       |
|                         |                                   |                         |                         | ha-member-up ha-member-down   |
|                         |                                   |                         |                         | ent-conf-change av-conserve   |
|                         |                                   |                         |                         | av-bypass av-oversize-passed  |
|                         |                                   |                         |                         | av-oversize-blocked           |
|                         |                                   |                         |                         | ips-pkg-update ips-fail-open  |
|                         |                                   |                         |                         | temperature-high              |
|                         |                                   |                         |                         | voltage-alert power-supply    |
|                         |                                   |                         |                         | faz-disconnect faz            |
|                         |                                   |                         |                         | fan-failure wc-ap-up          |
|                         |                                   |                         |                         | wc-ap-down fswctl-session-up  |
|                         |                                   |                         |                         | fswctl-session-down           |
|                         |                                   |                         |                         | load-balance-real-server-down |
|                         |                                   |                         |                         | per-cpu-high dhcp pool-usage  |
|                         |                                   |                         |                         | ippool interface              |
|                         |                                   |                         |                         | ospf-nbr-state-change         |
|                         |                                   |                         |                         | ospf-virtnbr-state-change bfd |
|                         |                                   |                         |                         | \*\*                          |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | Option                          | Description                                            |                          |
|                         | +=================================+========================================================+                          |
|                         | | *cpu-high*                      | Send a trap when CPU usage is high.                    |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *mem-low*                       | Send a trap when used memory is high, free memory is   |                          |
|                         | |                                 | low, or freeable memory is high.                       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *log-full*                      | Send a trap when log disk space becomes low.           |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *intf-ip*                       | Send a trap when an interface IP address is changed.   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *vpn-tun-up*                    | Send a trap when a VPN tunnel comes up.                |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *vpn-tun-down*                  | Send a trap when a VPN tunnel goes down.               |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ha-switch*                     | Send a trap after an HA failover when the backup unit  |                          |
|                         | |                                 | has taken over.                                        |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ha-hb-failure*                 | Send a trap when HA heartbeats are not received.       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ips-signature*                 | Send a trap when IPS detects an attack.                |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ips-anomaly*                   | Send a trap when IPS finds an anomaly.                 |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-virus*                      | Send a trap when AntiVirus finds a virus.              |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-oversize*                   | Send a trap when AntiVirus finds an oversized file.    |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-pattern*                    | Send a trap when AntiVirus finds file matching         |                          |
|                         | |                                 | pattern.                                               |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-fragmented*                 | Send a trap when AntiVirus finds a fragmented file.    |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *fm-if-change*                  | Send a trap when FortiManager interface changes. Send  |                          |
|                         | |                                 | a FortiManager trap.                                   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *fm-conf-change*                | Send a trap when a configuration change is made by a   |                          |
|                         | |                                 | FortiGate administrator and the FortiGate is managed   |                          |
|                         | |                                 | by FortiManager.                                       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *bgp-established*               | Send a trap when a BGP FSM transitions to the          |                          |
|                         | |                                 | established state.                                     |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *bgp-backward-transition*       | Send a trap when a BGP FSM goes from a high numbered   |                          |
|                         | |                                 | state to a lower numbered state.                       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ha-member-up*                  | Send a trap when an HA cluster member goes up.         |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ha-member-down*                | Send a trap when an HA cluster member goes down.       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ent-conf-change*               | Send a trap when an entity MIB change occurs           |                          |
|                         | |                                 | (RFC4133).                                             |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-conserve*                   | Send a trap when the FortiGate enters conserve mode.   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-bypass*                     | Send a trap when the FortiGate enters bypass mode.     |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-oversize-passed*            | Send a trap when AntiVirus passes an oversized file.   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *av-oversize-blocked*           | Send a trap when AntiVirus blocks an oversized file.   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ips-pkg-update*                | Send a trap when the IPS signature database or engine  |                          |
|                         | |                                 | is updated.                                            |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ips-fail-open*                 | Send a trap when the IPS network buffer is full.       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *temperature-high*              | Send a trap when a temperature sensor registers a      |                          |
|                         | |                                 | temperature that is too high.                          |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *voltage-alert*                 | Send a trap when a voltage sensor registers a voltage  |                          |
|                         | |                                 | that is outside of the normal range.                   |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *power-supply*                  | Send a trap when a power supply fails or restores.     |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *faz-disconnect*                | Send a trap when a FortiAnalyzer disconnects from the  |                          |
|                         | |                                 | FortiGate.                                             |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *faz*                           | Send a trap when Fortianalyzer main server failover    |                          |
|                         | |                                 | and alternate server take over, or alternate server    |                          |
|                         | |                                 | failover and main server take over.                    |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *fan-failure*                   | Send a trap when a fan fails.                          |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *wc-ap-up*                      | Send a trap when a managed FortiAP comes up.           |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *wc-ap-down*                    | Send a trap when a managed FortiAP goes down.          |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *fswctl-session-up*             | Send a trap when a FortiSwitch controller session      |                          |
|                         | |                                 | comes up.                                              |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *fswctl-session-down*           | Send a trap when a FortiSwitch controller session goes |                          |
|                         | |                                 | down.                                                  |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *load-balance-real-server-down* | Send a trap when a server load balance real server     |                          |
|                         | |                                 | goes down.                                             |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *device-new*                    | Send a trap when a new device is found.                |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *per-cpu-high*                  | Send a trap when per-CPU usage is high.                |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *dhcp*                          | Send a trap when the DHCP server exhausts the IP pool, |                          |
|                         | |                                 | an IP address already is in use, or a DHCP client      |                          |
|                         | |                                 | interface received a DHCP-NAK.                         |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *pool-usage*                    | Send a trap about ippool usage.                        |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ippool*                        | Send a trap for ippool events.                         |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *interface*                     | Send a trap for interface event.                       |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ospf-nbr-state-change*         | Send a trap when there has been a change in the state  |                          |
|                         | |                                 | of a non-virtual OSPF neighbor.                        |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *ospf-virtnbr-state-change*     | Send a trap when there has been a change in the state  |                          |
|                         | |                                 | of an OSPF virtual neighbor.                           |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
|                         | | *bfd*                           | Send a trap for bfd event.                             |                          |
|                         | +---------------------------------+--------------------------------------------------------+                          |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| ha-direct               | Enable/disable direct management  | option                  | \-                      | disable                       |
|                         | of HA cluster members.            |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *enable*    | Enable setting.                                        |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *disable*   | Disable setting.                                       |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| interface               | Specify outgoing interface to     | string                  | Maximum length: 15      |                               |
|                         | reach server.                     |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| interface-select-method | Specify how to select outgoing    | option                  | \-                      | auto                          |
|                         | interface to reach server.        |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *auto*      | Set outgoing interface automatically.                  |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *sdwan*     | Set outgoing interface by SD-WAN or policy routing     |                                              |
|                         | |             | rules.                                                 |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *specify*   | Set outgoing interface manually.                       |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| mib-view                | SNMP access control MIB view.     | string                  | Maximum length: 32      |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| name                    | SNMP user name.                   | string                  | Maximum length: 32      |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| notify-hosts            | SNMP managers to send             | ipv4-address            | Not Specified           |                               |
|                         | notifications (traps) to.         |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| notify-hosts6           | IPv6 SNMP managers to send        | ipv6-address            | Not Specified           |                               |
|                         | notifications (traps) to.         |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| priv-proto              | Privacy (encryption) protocol.    | option                  | \-                      | aes                           |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +---------------+--------------------------------------------------------+                                            |
|                         | | Option        | Description                                            |                                            |
|                         | +===============+========================================================+                                            |
|                         | | *aes*         | CFB128-AES-128 symmetric encryption protocol.          |                                            |
|                         | +---------------+--------------------------------------------------------+                                            |
|                         | | *des*         | CBC-DES symmetric encryption protocol.                 |                                            |
|                         | +---------------+--------------------------------------------------------+                                            |
|                         | | *aes256*      | CFB128-AES-256 symmetric encryption protocol.          |                                            |
|                         | +---------------+--------------------------------------------------------+                                            |
|                         | | *aes256cisco* | CFB128-AES-256 symmetric encryption protocol           |                                            |
|                         | |               | compatible with CISCO.                                 |                                            |
|                         | +---------------+--------------------------------------------------------+                                            |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| priv-pwd                | Password for privacy (encryption) | password                | Not Specified           |                               |
|                         | protocol.                         |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| queries                 | Enable/disable SNMP queries for   | option                  | \-                      | enable                        |
|                         | this user.                        |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *enable*    | Enable setting.                                        |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *disable*   | Disable setting.                                       |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| query-port              | SNMPv3 query port (default =      | integer                 | Minimum value: 1        | 161                           |
|                         | 161).                             |                         | Maximum value: 65535    |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| security-level          | Security level for message        | option                  | \-                      | no-auth-no-priv               |
|                         | authentication and encryption.    |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------------+--------------------------------------------------------+                                        |
|                         | | Option            | Description                                            |                                        |
|                         | +===================+========================================================+                                        |
|                         | | *no-auth-no-priv* | Message with no authentication and no privacy          |                                        |
|                         | |                   | (encryption).                                          |                                        |
|                         | +-------------------+--------------------------------------------------------+                                        |
|                         | | *auth-no-priv*    | Message with authentication but no privacy             |                                        |
|                         | |                   | (encryption).                                          |                                        |
|                         | +-------------------+--------------------------------------------------------+                                        |
|                         | | *auth-priv*       | Message with authentication and privacy (encryption).  |                                        |
|                         | +-------------------+--------------------------------------------------------+                                        |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| source-ip               | Source IP for SNMP trap.          | ipv4-address            | Not Specified           | 0.0.0.0                       |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| source-ipv6             | Source IPv6 for SNMP trap.        | ipv6-address            | Not Specified           | ::                            |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| status                  | Enable/disable this SNMP user.    | option                  | \-                      | enable                        |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *enable*    | Enable setting.                                        |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *disable*   | Disable setting.                                       |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-lport              | SNMPv3 local trap port (default = | integer                 | Minimum value: 1        | 162                           |
|                         | 162).                             |                         | Maximum value: 65535    |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-rport              | SNMPv3 trap remote port (default  | integer                 | Minimum value: 1        | 162                           |
|                         | = 162).                           |                         | Maximum value: 65535    |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| trap-status             | Enable/disable traps for this     | option                  | \-                      | enable                        |
|                         | SNMP user.                        |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | Option      | Description                                            |                                              |
|                         | +=============+========================================================+                                              |
|                         | | *enable*    | Enable setting.                                        |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
|                         | | *disable*   | Disable setting.                                       |                                              |
|                         | +-------------+--------------------------------------------------------+                                              |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| vdoms `<name>`          | SNMP access control VDOMs.        | string                  | Maximum length: 79      |                               |
|                         |                                   |                         |                         |                               |
|                         | VDOM name.                        |                         |                         |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+
| vrf-select              | VRF ID used for connection to     | integer                 | Minimum value: 0        | 0                             |
|                         | server.                           |                         | Maximum value: 511      |                               |
+-------------------------+-----------------------------------+-------------------------+-------------------------+-------------------------------+

