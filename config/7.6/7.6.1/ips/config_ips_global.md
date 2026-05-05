# config ips global

Configure IPS global parameter.

## Syntax

```
config ips global
    Description: Configure IPS global parameter.
    set anomaly-mode [periodical|continuous]
    set av-mem-limit {integer}
    set cp-accel-mode [none|basic|...]
    set database [regular|extended]
    set deep-app-insp-db-limit {integer}
    set deep-app-insp-timeout {integer}
    set engine-count {integer}
    set exclude-signatures [none|ot]
    set fail-open [enable|disable]
    set ips-reserve-cpu [disable|enable]
    set ngfw-max-scan-range {integer}
    set np-accel-mode [none|basic]
    set packet-log-queue-depth {integer}
    set session-limit-mode [accurate|heuristic]
    set socket-size {integer}
    set sync-session-ttl [enable|disable]
    config tls-active-probe
        Description: TLS active probe configuration.
        set interface {string}
        set interface-select-method [auto|sdwan|...]
        set source-ip {ipv4-address}
        set source-ip6 {ipv6-address}
        set vdom {string}
    end
    set traffic-submit [enable|disable]
end
```

## Parameters

+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter              | Description                       | Type                | Size                | Default             |
+========================+===================================+=====================+=====================+=====================+
| anomaly-mode           | Global blocking mode for          | option              | \-                  | continuous          |
|                        | rate-based anomalies.             |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +--------------+--------------------------------------------------------+                           |
|                        | | Option       | Description                                            |                           |
|                        | +==============+========================================================+                           |
|                        | | *periodical* | After an anomaly is detected, allow the number of      |                           |
|                        | |              | packets per second according to the anomaly            |                           |
|                        | |              | configuration.                                         |                           |
|                        | +--------------+--------------------------------------------------------+                           |
|                        | | *continuous* | Block packets once an anomaly is detected. Overrides   |                           |
|                        | |              | individual anomaly settings.                           |                           |
|                        | +--------------+--------------------------------------------------------+                           |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| av-mem-limit           | Maximum percentage of system      | integer             | Minimum value: 10   | 0                   |
|                        | memory allowed for use on AV      |                     | Maximum value: 50   |                     |
|                        | scanning. To disable set to zero. |                     |                     |                     |
|                        | When disabled, there is no limit  |                     |                     |                     |
|                        | on the AV memory usage.           |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| cp-accel-mode \*       | IPS Pattern matching              | option              | \-                  | advanced \*\*       |
|                        | acceleration/offloading to CPx    |                     |                     |                     |
|                        | processors.                       |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *none*      | CPx acceleration/offloading disabled.                  |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *basic*     | Offload basic pattern matching to CPx processors.      |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *advanced*  | Offload more types of pattern matching resulting in    |                            |
|                        | |             | higher throughput than basic mode. Requires two CP8s   |                            |
|                        | |             | or one CP9.                                            |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| database               | Regular or extended IPS database. | option              | \-                  | extended \*\*       |
|                        | Regular protects against the      |                     |                     |                     |
|                        | latest common and in-the-wild     |                     |                     |                     |
|                        | attacks. Extended includes        |                     |                     |                     |
|                        | protection from legacy attacks.   |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *regular*   | IPS regular database package.                          |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *extended*  | IPS extended database package.                         |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| deep-app-insp-db-limit | Limit on number of entries in     | integer             | Minimum value: 0    | 0                   |
|                        | deep application inspection       |                     | Maximum value:      |                     |
|                        | database.                         |                     | 2147483647          |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| deep-app-insp-timeout  | Timeout for Deep application      | integer             | Minimum value: 0    | 0                   |
|                        | inspection.                       |                     | Maximum value:      |                     |
|                        |                                   |                     | 2147483647          |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| engine-count           | Number of IPS engines running. If | integer             | Minimum value: 0    | 0                   |
|                        | set to the default value of 0,    |                     | Maximum value: 255  |                     |
|                        | FortiOS sets the number to        |                     |                     |                     |
|                        | optimize performance depending on |                     |                     |                     |
|                        | the number of CPU cores.          |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| exclude-signatures     | Excluded signatures.              | option              | \-                  | ot                  |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *none*      | No signatures excluded.                                |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *ot*        | Exclude ot signatures.                                 |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| fail-open              | Enable to allow traffic if the    | option              | \-                  | disable             |
|                        | IPS buffer is full. Default is    |                     |                     |                     |
|                        | disable and IPS traffic is        |                     |                     |                     |
|                        | blocked when the IPS buffer is    |                     |                     |                     |
|                        | full.                             |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *enable*    | Enable IPS fail open.                                  |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *disable*   | Disable IPS fail open.                                 |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ips-reserve-cpu \*     | Enable/disable IPS daemon\'s use  | option              | \-                  | disable             |
|                        | of CPUs other than CPU 0.         |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *disable*   | Disable IPS daemon\'s use of CPUs other than CPU 0     |                            |
|                        | |             | (all daemons run on all CPUs).                         |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *enable*    | Enable IPS daemon\'s use of CPUs other than CPU 0.     |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ngfw-max-scan-range    | NGFW policy-mode app detection    | integer             | Minimum value: 0    | 4096                |
|                        | threshold.                        |                     | Maximum value:      |                     |
|                        |                                   |                     | 4294967295          |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| np-accel-mode \*       | Acceleration mode for IPS         | option              | \-                  | basic               |
|                        | processing by NPx processors.     |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *none*      | NPx acceleration disabled.                             |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *basic*     | NPx acceleration enabled.                              |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| packet-log-queue-depth | Packet/pcap log queue depth per   | integer             | Minimum value: 128  | 128                 |
|                        | IPS engine.                       |                     | Maximum value: 4096 |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| session-limit-mode     | Method of counting concurrent     | option              | \-                  | heuristic           |
|                        | sessions used by session limit    |                     |                     |                     |
|                        | anomalies. Choose between greater |                     |                     |                     |
|                        | accuracy (accurate) or improved   |                     |                     |                     |
|                        | performance (heuristics).         |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *accurate*  | Accurately count concurrent sessions, demands more     |                            |
|                        | |             | resources.                                             |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *heuristic* | Use heuristics to estimate the number of concurrent    |                            |
|                        | |             | sessions. Acceptable in most cases.                    |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| socket-size            | IPS socket buffer size. Max and   | integer             | Minimum value: 0    | 128 \*\*            |
|                        | default value depend on available |                     | Maximum value: 256  |                     |
|                        | memory. Can be changed to tune    |                     | \*\*                |                     |
|                        | performance.                      |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| sync-session-ttl       | Enable/disable use of kernel      | option              | \-                  | enable              |
|                        | session TTL for IPS sessions.     |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *enable*    | Enable use of kernel session TTL for IPS sessions.     |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *disable*   | Disable use of kernel session TTL for IPS sessions.    |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
| traffic-submit         | Enable/disable submitting attack  | option              | \-                  | disable             |
|                        | data found by this FortiGate to   |                     |                     |                     |
|                        | FortiGuard.                       |                     |                     |                     |
+------------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | Option      | Description                                            |                            |
|                        | +=============+========================================================+                            |
|                        | | *enable*    | Enable traffic submit.                                 |                            |
|                        | +-------------+--------------------------------------------------------+                            |
|                        | | *disable*   | Disable traffic submit.                                |                            |
|                        | +-------------+--------------------------------------------------------+                            |
+------------------------+-----------------------------------------------------------------------------------------------------+

