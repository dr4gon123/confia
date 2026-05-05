# config system ha

Configure HA.

## Syntax

```
config system ha
    Description: Configure HA.
    set arps {integer}
    set arps-interval {integer}
    set authentication [enable|disable]
    set cpu-threshold {user}
    set encryption [enable|disable]
    set evpn-ttl {integer}
    set failover-hold-time {integer}
    set ftp-proxy-threshold {user}
    set gratuitous-arps [enable|disable]
    set group-id {integer}
    set group-name {string}
    set ha-direct [enable|disable]
    set ha-eth-type {string}
    config ha-mgmt-interfaces
        Description: Reserve interfaces to manage individual cluster units.
        edit <id>
            set interface {string}
            set dst {ipv4-classnet}
            set gateway {ipv4-address}
            set gateway6 {ipv6-address}
        next
    end
    set ha-mgmt-status [enable|disable]
    set ha-uptime-diff-margin {integer}
    set hb-interval {integer}
    set hb-interval-in-milliseconds [100ms|10ms]
    set hb-lost-threshold {integer}
    set hbdev {user}
    set hc-eth-type {string}
    set hello-holddown {integer}
    set http-proxy-threshold {user}
    set imap-proxy-threshold {user}
    set key {password}
    set l2ep-eth-type {string}
    set link-failed-signal [enable|disable]
    set load-balance-all [enable|disable]
    set logical-sn [enable|disable]
    set memory-based-failover [enable|disable]
    set memory-compatible-mode [enable|disable]
    set memory-failover-flip-timeout {integer}
    set memory-failover-monitor-period {integer}
    set memory-failover-sample-rate {integer}
    set memory-failover-threshold {integer}
    set memory-threshold {user}
    set mode [standalone|a-a|...]
    set monitor {user}
    set multicast-ttl {integer}
    set nntp-proxy-threshold {user}
    set override [enable|disable]
    set override-wait-time {integer}
    set password {password}
    set pingserver-failover-threshold {integer}
    set pingserver-flip-timeout {integer}
    set pingserver-monitor-interface {user}
    set pingserver-secondary-force-reset [enable|disable]
    set pop3-proxy-threshold {user}
    set priority {integer}
    set route-hold {integer}
    set route-ttl {integer}
    set route-wait {integer}
    set schedule [none|leastconnection|...]
    set session-pickup [enable|disable]
    set session-pickup-connectionless [enable|disable]
    set session-pickup-delay [enable|disable]
    set session-pickup-expectation [enable|disable]
    set session-pickup-nat [enable|disable]
    set session-sync-dev {user}
    set smtp-proxy-threshold {user}
    set ssd-failover [enable|disable]
    set standalone-config-sync [enable|disable]
    set standalone-mgmt-vdom [enable|disable]
    set sync-config [enable|disable]
    set sync-packet-balance [enable|disable]
    set uninterruptible-primary-wait {integer}
    set upgrade-mode [simultaneous|uninterruptible|...]
    config vcluster
        Description: Virtual cluster table.
        edit <vcluster-id>
            set override [enable|disable]
            set priority {integer}
            set override-wait-time {integer}
            set monitor {user}
            set pingserver-monitor-interface {user}
            set pingserver-failover-threshold {integer}
            set pingserver-secondary-force-reset [enable|disable]
            set vdom <name1>, <name2>, ...
        next
    end
    set vcluster-status [enable|disable]
    set weight {user}
end
```

## Parameters

+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter                        | Description                       | Type                  | Size                  | Default               |
+==================================+===================================+=======================+=======================+=======================+
| arps                             | Number of gratuitous ARPs. Lower  | integer               | Minimum value: 1      | 5                     |
|                                  | to reduce traffic. Higher to      |                       | Maximum value: 60     |                       |
|                                  | reduce failover time.             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| arps-interval                    | Time between gratuitous ARPs .    | integer               | Minimum value: 1      | 8                     |
|                                  | Lower to reduce failover time.    |                       | Maximum value: 20     |                       |
|                                  | Higher to reduce traffic.         |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| authentication                   | Enable/disable heartbeat message  | option                | \-                    | disable               |
|                                  | authentication.                   |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable heartbeat message authentication.               |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable heartbeat message authentication.              |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| cpu-threshold                    | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | CPU usage weight and high and low |                       |                       |                       |
|                                  | thresholds.                       |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| encryption                       | Enable/disable heartbeat message  | option                | \-                    | disable               |
|                                  | encryption.                       |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable heartbeat message encryption.                   |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable heartbeat message encryption.                  |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| evpn-ttl                         | HA EVPN FDB TTL on primary box.   | integer               | Minimum value: 5      | 60                    |
|                                  |                                   |                       | Maximum value: 3600   |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| failover-hold-time               | Time to wait before failover , to | integer               | Minimum value: 0      | 0                     |
|                                  | avoid flip.                       |                       | Maximum value: 300    |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ftp-proxy-threshold              | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | FTP proxy sessions.               |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| gratuitous-arps                  | Enable/disable gratuitous ARPs.   | option                | \-                    | enable                |
|                                  | Disable if link-failed-signal     |                       |                       |                       |
|                                  | enabled.                          |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable gratuitous ARPs.                                |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable gratuitous ARPs.                               |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| group-id                         | HA group ID . Must be the same    | integer               | Minimum value: 0      | 0                     |
|                                  | for all members.                  |                       | Maximum value: 1023   |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| group-name                       | Cluster group name. Must be the   | string                | Maximum length: 32    |                       |
|                                  | same for all members.             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ha-direct                        | Enable/disable using ha-mgmt      | option                | \-                    | disable               |
|                                  | interface for syslog, remote      |                       |                       |                       |
|                                  | authentication (RADIUS),          |                       |                       |                       |
|                                  | FortiAnalyzer, FortiSandbox,      |                       |                       |                       |
|                                  | sFlow, and Netflow.               |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable using ha-mgmt interface for syslog, remote      |                                  |
|                                  | |             | authentication (RADIUS), FortiAnalyzer, FortiSandbox,  |                                  |
|                                  | |             | sFlow, and Netflow.                                    |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable using ha-mgmt interface for syslog, remote     |                                  |
|                                  | |             | authentication (RADIUS), FortiAnalyzer, FortiSandbox,  |                                  |
|                                  | |             | sFlow, and Netflow.                                    |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ha-eth-type                      | HA heartbeat packet Ethertype     | string                | Maximum length: 4     | 8890                  |
|                                  | (4-digit hex).                    |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ha-mgmt-status                   | Enable to reserve interfaces to   | option                | \-                    | disable               |
|                                  | manage individual cluster units.  |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ha-uptime-diff-margin            | Normally you would only reduce    | integer               | Minimum value: 1      | 300                   |
|                                  | this value for failover testing.  |                       | Maximum value: 65535  |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hb-interval                      | Time between sending heartbeat    | integer               | Minimum value: 1      | 2                     |
|                                  | packets. Increase to reduce false |                       | Maximum value: 20     |                       |
|                                  | positives.                        |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hb-interval-in-milliseconds      | Units of heartbeat interval time  | option                | \-                    | 100ms                 |
|                                  | between sending heartbeat         |                       |                       |                       |
|                                  | packets. Default is 100ms.        |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *100ms*     | Each heartbeat interval is 100ms.                      |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *10ms*      | Each heartbeat interval is 10ms.                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hb-lost-threshold                | Number of lost heartbeats to      | integer               | Minimum value: 1      | 6                     |
|                                  | signal a failure. Increase to     |                       | Maximum value: 60     |                       |
|                                  | reduce false positives.           |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hbdev                            | Heartbeat interfaces. Must be the | user                  | Not Specified         |                       |
|                                  | same for all members. Enter       |                       |                       |                       |
|                                  | \<interface\> \<priority\> pairs  |                       |                       |                       |
|                                  | to specify the priority of each   |                       |                       |                       |
|                                  | heartbeat interface. Higher       |                       |                       |                       |
|                                  | priority takes precedence.        |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hc-eth-type                      | Transparent mode HA heartbeat     | string                | Maximum length: 4     | 8891                  |
|                                  | packet Ethertype (4-digit hex).   |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| hello-holddown                   | Time to wait before changing from | integer               | Minimum value: 5      | 20                    |
|                                  | hello to work state.              |                       | Maximum value: 300    |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| http-proxy-threshold             | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | HTTP proxy sessions.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| imap-proxy-threshold             | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | IMAP proxy sessions.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| key                              | Key.                              | password              | Not Specified         |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| l2ep-eth-type                    | Telnet session HA heartbeat       | string                | Maximum length: 4     | 8893                  |
|                                  | packet Ethertype (4-digit hex).   |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| link-failed-signal               | Enable to shut down all           | option                | \-                    | disable               |
|                                  | interfaces for 1 sec after a      |                       |                       |                       |
|                                  | failover. Use if gratuitous ARPs  |                       |                       |                       |
|                                  | do not update network.            |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| load-balance-all                 | Enable to load balance TCP        | option                | \-                    | disable               |
|                                  | sessions. Disable to load balance |                       |                       |                       |
|                                  | proxy sessions only.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable load balance.                                   |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable load balance.                                  |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| logical-sn                       | Enable/disable usage of the       | option                | \-                    | disable               |
|                                  | logical serial number.            |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable usage of the logical serial number.             |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable usage of the logical serial number.            |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-based-failover            | Enable/disable memory based       | option                | \-                    | disable               |
|                                  | failover.                         |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-compatible-mode           | Enable/disable memory compatible  | option                | \-                    | disable               |
|                                  | mode.                             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-failover-flip-timeout     | Time to wait between subsequent   | integer               | Minimum value: 6      | 6                     |
|                                  | memory based failovers in         |                       | Maximum value:        |                       |
|                                  | minutes.                          |                       | 2147483647            |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-failover-monitor-period   | Duration of high memory usage     | integer               | Minimum value: 1      | 60                    |
|                                  | before memory based failover is   |                       | Maximum value: 300    |                       |
|                                  | triggered in seconds.             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-failover-sample-rate      | Rate at which memory usage is     | integer               | Minimum value: 1      | 1                     |
|                                  | sampled in order to measure       |                       | Maximum value: 60     |                       |
|                                  | memory usage in seconds.          |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-failover-threshold        | Memory usage threshold to trigger | integer               | Minimum value: 0      | 0                     |
|                                  | memory based failover (0 means    |                       | Maximum value: 95     |                       |
|                                  | using conserve mode threshold in  |                       |                       |                       |
|                                  | system.global).                   |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| memory-threshold                 | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | memory usage weight and high and  |                       |                       |                       |
|                                  | low thresholds.                   |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| mode                             | HA mode. Must be the same for all | option                | \-                    | standalone            |
|                                  | members. FGSP requires            |                       |                       |                       |
|                                  | standalone.                       |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +--------------+--------------------------------------------------------+                                 |
|                                  | | Option       | Description                                            |                                 |
|                                  | +==============+========================================================+                                 |
|                                  | | *standalone* | Standalone mode.                                       |                                 |
|                                  | +--------------+--------------------------------------------------------+                                 |
|                                  | | *a-a*        | Active-active mode.                                    |                                 |
|                                  | +--------------+--------------------------------------------------------+                                 |
|                                  | | *a-p*        | Active-passive mode.                                   |                                 |
|                                  | +--------------+--------------------------------------------------------+                                 |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| monitor                          | Interfaces to check for port      | user                  | Not Specified         |                       |
|                                  | monitoring (or link failure).     |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| multicast-ttl                    | HA multicast TTL on primary.      | integer               | Minimum value: 5      | 600                   |
|                                  |                                   |                       | Maximum value: 3600   |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| nntp-proxy-threshold             | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | NNTP proxy sessions.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| override                         | Enable and increase the priority  | option                | \-                    | disable               |
|                                  | of the unit that should always be |                       |                       |                       |
|                                  | primary (master).                 |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| override-wait-time               | Delay negotiating if override is  | integer               | Minimum value: 0      | 0                     |
|                                  | enabled. Reduces how often the    |                       | Maximum value: 3600   |                       |
|                                  | cluster negotiates.               |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| password                         | Cluster password. Must be the     | password              | Not Specified         |                       |
|                                  | same for all members.             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| pingserver-failover-threshold    | Remote IP monitoring failover     | integer               | Minimum value: 0      | 0                     |
|                                  | threshold.                        |                       | Maximum value: 50     |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| pingserver-flip-timeout          | Time to wait in minutes before    | integer               | Minimum value: 6      | 60                    |
|                                  | renegotiating after a remote IP   |                       | Maximum value:        |                       |
|                                  | monitoring failover.              |                       | 2147483647            |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| pingserver-monitor-interface     | Interfaces to check for remote IP | user                  | Not Specified         |                       |
|                                  | monitoring.                       |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| pingserver-secondary-force-reset | Enable to force the cluster to    | option                | \-                    | enable                |
|                                  | negotiate after a remote IP       |                       |                       |                       |
|                                  | monitoring failover.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable force reset of secondary member after PING      |                                  |
|                                  | |             | server failure.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable force reset of secondary member after PING     |                                  |
|                                  | |             | server failure.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| pop3-proxy-threshold             | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | POP3 proxy sessions.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| priority                         | Increase the priority to select   | integer               | Minimum value: 0      | 128                   |
|                                  | the primary unit.                 |                       | Maximum value: 255    |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| route-hold                       | Time to wait between routing      | integer               | Minimum value: 0      | 10                    |
|                                  | table updates to the cluster.     |                       | Maximum value: 3600   |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| route-ttl                        | TTL for primary unit routes.      | integer               | Minimum value: 5      | 10                    |
|                                  | Increase to maintain active       |                       | Maximum value: 3600   |                       |
|                                  | routes during failover.           |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| route-wait                       | Time to wait before sending new   | integer               | Minimum value: 0      | 0                     |
|                                  | routes to the cluster.            |                       | Maximum value: 3600   |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| schedule                         | Type of A-A load balancing. Use   | option                | \-                    | round-robin           |
|                                  | none if you have external load    |                       |                       |                       |
|                                  | balancers.                        |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | Option               | Description                                            |                         |
|                                  | +======================+========================================================+                         |
|                                  | | *none*               | None.                                                  |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *leastconnection*    | Least connection.                                      |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *round-robin*        | Round robin.                                           |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *weight-round-robin* | Weight round robin.                                    |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *random*             | Random.                                                |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *ip*                 | IP.                                                    |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
|                                  | | *ipport*             | IP port.                                               |                         |
|                                  | +----------------------+--------------------------------------------------------+                         |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-pickup                   | Enable/disable session pickup.    | option                | \-                    | disable               |
|                                  | Enabling it can reduce session    |                       |                       |                       |
|                                  | down time when fail over happens. |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable session pickup.                                 |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable session pickup.                                |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-pickup-connectionless    | Enable/disable UDP and ICMP       | option                | \-                    | disable               |
|                                  | session sync.                     |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-pickup-delay             | Enable to sync sessions longer    | option                | \-                    | disable               |
|                                  | than 30 sec. Only longer lived    |                       |                       |                       |
|                                  | sessions need to be synced.       |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-pickup-expectation       | Enable/disable session helper     | option                | \-                    | disable               |
|                                  | expectation session sync for      |                       |                       |                       |
|                                  | FGSP.                             |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-pickup-nat               | Enable/disable NAT session sync   | option                | \-                    | disable               |
|                                  | for FGSP.                         |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| session-sync-dev                 | Offload session-sync process to   | user                  | Not Specified         |                       |
|                                  | kernel and sync sessions using    |                       |                       |                       |
|                                  | connected interface(s) directly.  |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| smtp-proxy-threshold             | Dynamic weighted load balancing   | user                  | Not Specified         |                       |
|                                  | weight and high and low number of |                       |                       |                       |
|                                  | SMTP proxy sessions.              |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| ssd-failover \*                  | Enable/disable automatic HA       | option                | \-                    | disable               |
|                                  | failover on SSD disk failure.     |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| standalone-config-sync           | Enable/disable FGSP configuration | option                | \-                    | disable               |
|                                  | synchronization.                  |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| standalone-mgmt-vdom             | Enable/disable standalone         | option                | \-                    | disable               |
|                                  | management VDOM.                  |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sync-config                      | Enable/disable configuration      | option                | \-                    | enable                |
|                                  | synchronization.                  |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable configuration synchronization.                  |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable configuration synchronization.                 |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| sync-packet-balance              | Enable/disable HA packet          | option                | \-                    | disable               |
|                                  | distribution to multiple CPUs.    |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable HA packet distribution to multiple CPUs.        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable HA packet distribution to multiple CPUs.       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| uninterruptible-primary-wait     | Number of minutes the primary HA  | integer               | Minimum value: 15     | 30                    |
|                                  | unit waits before the secondary   |                       | Maximum value: 300    |                       |
|                                  | HA unit is considered upgraded    |                       |                       |                       |
|                                  | and the system is started before  |                       |                       |                       |
|                                  | starting its own upgrade.         |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| upgrade-mode                     | The mode to upgrade a cluster.    | option                | \-                    | uninterruptible       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------------+--------------------------------------------------------+                            |
|                                  | | Option            | Description                                            |                            |
|                                  | +===================+========================================================+                            |
|                                  | | *simultaneous*    | Upgrade all HA members at the same time.               |                            |
|                                  | +-------------------+--------------------------------------------------------+                            |
|                                  | | *uninterruptible* | Upgrade HA cluster without blocking network traffic.   |                            |
|                                  | +-------------------+--------------------------------------------------------+                            |
|                                  | | *local-only*      | Upgrade local member only.                             |                            |
|                                  | +-------------------+--------------------------------------------------------+                            |
|                                  | | *secondary-only*  | Upgrade secondary member only.                         |                            |
|                                  | +-------------------+--------------------------------------------------------+                            |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| vcluster-status                  | Enable/disable virtual cluster    | option                | \-                    | disable               |
|                                  | for virtual clustering.           |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | Option      | Description                                            |                                  |
|                                  | +=============+========================================================+                                  |
|                                  | | *enable*    | Enable setting.                                        |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
|                                  | | *disable*   | Disable setting.                                       |                                  |
|                                  | +-------------+--------------------------------------------------------+                                  |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| weight                           | Weight-round-robin weight for     | user                  | Not Specified         | 0 40                  |
|                                  | each cluster unit. Syntax         |                       |                       |                       |
|                                  | \<priority\> \<weight\>.          |                       |                       |                       |
+----------------------------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

