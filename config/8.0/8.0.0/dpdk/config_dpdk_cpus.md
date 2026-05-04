# config dpdk cpus

Configure CPUs enabled to run engines in each DPDK stage.

## Syntax

```
config dpdk cpus
    Description: Configure CPUs enabled to run engines in each DPDK stage.
    set ips-cpus {string}
    set isolated-cpus {string}
    set rx-cpus {string}
    set tx-cpus {string}
    set vnp-cpus {string}
    set vnpsp-cpus {string}
end
```

## Parameters

+---------------+-----------------------------------+--------+---------+---------+
| Parameter     | Description                       | Type   | Size    | Default |
+===============+===================================+========+=========+=========+
| ips-cpus      | CPUs enabled to run DPDK IPS      | string | Maximum | all     |
|               | engines.                          |        | length: |         |
|               |                                   |        | 1022    |         |
+---------------+-----------------------------------+--------+---------+---------+
| isolated-cpus | CPUs isolated to run only the     | string | Maximum | none    |
|               | DPDK engines with the exception   |        | length: |         |
|               | of processes that have affinity   |        | 1022    |         |
|               | explicitly set by either a user   |        |         |         |
|               | configuration or by their         |        |         |         |
|               | implementation.                   |        |         |         |
+---------------+-----------------------------------+--------+---------+---------+
| rx-cpus       | CPUs enabled to run DPDK RX       | string | Maximum | all     |
|               | engines.                          |        | length: |         |
|               |                                   |        | 1022    |         |
+---------------+-----------------------------------+--------+---------+---------+
| tx-cpus       | CPUs enabled to run DPDK TX       | string | Maximum | all     |
|               | engines.                          |        | length: |         |
|               |                                   |        | 1022    |         |
+---------------+-----------------------------------+--------+---------+---------+
| vnp-cpus      | CPUs enabled to run DPDK VNP      | string | Maximum | all     |
|               | engines.                          |        | length: |         |
|               |                                   |        | 1022    |         |
+---------------+-----------------------------------+--------+---------+---------+
| vnpsp-cpus    | CPUs enabled to run DPDK VNP slow | string | Maximum | all     |
|               | path.                             |        | length: |         |
|               |                                   |        | 1022    |         |
+---------------+-----------------------------------+--------+---------+---------+

