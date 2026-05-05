# config system sdn-connector

Configure connection to SDN Connector.

## Syntax

```
config system sdn-connector
    Description: Configure connection to SDN Connector.
    edit <name>
        set access-key {string}
        set alt-resource-ip [disable|enable]
        set api-key {password}
        set azure-region [global|china|...]
        set client-id {string}
        set client-secret {password}
        config compartment-list
            Description: Configure OCI compartment list.
            edit <compartment-id>
            next
        end
        set compute-generation {integer}
        set domain {string}
        config external-account-list
            Description: Configure AWS external account list.
            edit <role-arn>
                set external-id {string}
                set region-list <region1>, <region2>, ...
            next
        end
        config external-ip
            Description: Configure GCP external IP.
            edit <name>
            next
        end
        config forwarding-rule
            Description: Configure GCP forwarding rule.
            edit <rule-name>
                set target {string}
            next
        end
        config gcp-project-list
            Description: Configure GCP project list.
            edit <id>
                set gcp-zone-list <name1>, <name2>, ...
            next
        end
        set group-name {string}
        set ha-status [disable|enable]
        set ibm-region [dallas|washington-dc|...]
        set login-endpoint {string}
        config nic
            Description: Configure Azure network interface.
            edit <name>
                config ip
                    Description: Configure IP configuration.
                    edit <name>
                        set private-ip {string}
                        set public-ip {string}
                        set resource-group {string}
                    next
                end
                set peer-nic {string}
            next
        end
        set oci-cert {string}
        set oci-fingerprint {string}
        config oci-region-list
            Description: Configure OCI region list.
            edit <region>
            next
        end
        set oci-region-type [commercial|government]
        set password {password_aes256}
        set private-key {user}
        set proxy {string}
        set region {string}
        set resource-group {string}
        set resource-url {string}
        config route
            Description: Configure GCP route.
            edit <name>
            next
        end
        config route-table
            Description: Configure Azure route table.
            edit <name>
                set resource-group {string}
                config route
                    Description: Configure Azure route.
                    edit <name>
                        set next-hop {string}
                    next
                end
                set subscription-id {string}
            next
        end
        set secret-key {password}
        set secret-token {user}
        set server {string}
        set server-ca-cert {string}
        set server-cert {string}
        set server-list <ip1>, <ip2>, ...
        set server-port {integer}
        set service-account {string}
        set status [disable|enable]
        set subscription-id {string}
        set tenant-id {string}
        set type [aci|alicloud|...]
        set update-interval {integer}
        set use-metadata-iam [disable|enable]
        set user-id {string}
        set username {string}
        set vcenter-password {password_aes256}
        set vcenter-server {string}
        set vcenter-username {string}
        set verify-certificate [disable|enable]
        set vpc-id {string}
    next
end
```

## Parameters

+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| Parameter          | Description                       | Type                | Size                | Default             |
+====================+===================================+=====================+=====================+=====================+
| access-key         | AWS / ACS access key ID.          | string              | Maximum length: 31  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| alt-resource-ip    | Enable/disable AWS alternative    | option              | \-                  | disable             |
|                    | resource IP.                      |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *disable*   | Disable AWS alternative resource IP.                   |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *enable*    | Enable AWS alternative resource IP.                    |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| api-key            | IBM cloud API key or service ID   | password            | Not Specified       |                     |
|                    | API key.                          |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| azure-region       | Azure server region.              | option              | \-                  | global              |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *global*    | Global Azure Server.                                   |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *china*     | China Azure Server.                                    |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *germany*   | Germany Azure Server.                                  |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *usgov*     | US Government Azure Server.                            |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *local*     | Azure Stack Local Server.                              |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| client-id          | Azure client ID (application ID). | string              | Maximum length: 63  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| client-secret      | Azure client secret (application  | password            | Not Specified       |                     |
|                    | key).                             |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| compute-generation | Compute generation for IBM cloud  | integer             | Minimum value: 1    | 2                   |
|                    | infrastructure.                   |                     | Maximum value: 2    |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| domain             | Domain name.                      | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| group-name         | Full path group name of           | string              | Maximum length: 127 |                     |
|                    | computers.                        |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ha-status          | Enable/disable use for FortiGate  | option              | \-                  | disable             |
|                    | HA service.                       |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *disable*   | Disable use for FortiGate HA service.                  |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *enable*    | Enable use for FortiGate HA service.                   |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| ibm-region         | IBM cloud region name.            | option              | \-                  | dallas              |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | Option          | Description                                            |                        |
|                    | +=================+========================================================+                        |
|                    | | *dallas*        | US South (Dallas) Public Endpoint.                     |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *washington-dc* | US East (Washington DC) Public Endpoint.               |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *london*        | United Kingdom (London) Public Endpoint.               |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *frankfurt*     | Germany (Frankfurt) Public Endpoint.                   |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *sydney*        | Australia (Sydney) Public Endpoint.                    |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *tokyo*         | Japan (Tokyo) Public Endpoint.                         |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *osaka*         | Japan (Osaka) Public Endpoint.                         |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *toronto*       | Canada (Toronto) Public Endpoint.                      |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
|                    | | *sao-paulo*     | Brazil (Sao Paulo) Public Endpoint.                    |                        |
|                    | +-----------------+--------------------------------------------------------+                        |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| login-endpoint     | Azure Stack login endpoint.       | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| name               | SDN connector name.               | string              | Maximum length: 35  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| oci-cert           | OCI certificate.                  | string              | Maximum length: 63  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| oci-fingerprint    | OCI pubkey fingerprint.           | string              | Maximum length: 63  |                     |
|                    | Read-only.                        |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| oci-region-type    | OCI region type.                  | option              | \-                  | commercial          |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | Option       | Description                                            |                           |
|                    | +==============+========================================================+                           |
|                    | | *commercial* | Commercial region.                                     |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *government* | Government region.                                     |                           |
|                    | +--------------+--------------------------------------------------------+                           |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| password           | Password of the remote SDN        | password_aes256     | Not Specified       |                     |
|                    | connector as login credentials.   |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| private-key        | Private key of GCP service        | user                | Not Specified       |                     |
|                    | account.                          |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| proxy              | SDN proxy.                        | string              | Maximum length: 35  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| region             | AWS / ACS region name.            | string              | Maximum length: 31  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| resource-group     | Azure resource group.             | string              | Maximum length: 63  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| resource-url       | Azure Stack resource URL.         | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| secret-key         | AWS / ACS secret access key.      | password            | Not Specified       |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| secret-token       | Secret token of Kubernetes        | user                | Not Specified       |                     |
|                    | service account.                  |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server             | Server address of the remote SDN  | string              | Maximum length: 127 |                     |
|                    | connector.                        |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-ca-cert     | Trust only those servers whose    | string              | Maximum length: 127 |                     |
|                    | certificate is                    |                     |                     |                     |
|                    | directly/indirectly signed by     |                     |                     |                     |
|                    | this certificate.                 |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-cert        | Trust servers that contain this   | string              | Maximum length: 127 |                     |
|                    | certificate only.                 |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-list `<ip>` | Server address list of the remote | string              | Maximum length: 15  |                     |
|                    | SDN connector.                    |                     |                     |                     |
|                    |                                   |                     |                     |                     |
|                    | IPv4 address.                     |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| server-port        | Port number of the remote SDN     | integer             | Minimum value: 0    | 0                   |
|                    | connector.                        |                     | Maximum value:      |                     |
|                    |                                   |                     | 65535               |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| service-account    | GCP service account email.        | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| status             | Enable/disable connection to the  | option              | \-                  | enable              |
|                    | remote SDN connector.             |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *disable*   | Disable connection to this SDN Connector.              |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *enable*    | Enable connection to this SDN Connector.               |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| subscription-id    | Azure subscription ID.            | string              | Maximum length: 63  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| tenant-id          | Tenant ID (directory ID).         | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| type               | Type of SDN connector.            | option              | \-                  | aws                 |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | Option       | Description                                            |                           |
|                    | +==============+========================================================+                           |
|                    | | *aci*        | Application Centric Infrastructure (ACI).              |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *alicloud*   | AliCloud Service (ACS).                                |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *aws*        | Amazon Web Services (AWS).                             |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *azure*      | Microsoft Azure.                                       |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *gcp*        | Google Cloud Platform (GCP).                           |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *nsx*        | VMware NSX.                                            |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *nuage*      | Nuage VSP.                                             |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *oci*        | Oracle Cloud Infrastructure.                           |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *openstack*  | OpenStack.                                             |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *kubernetes* | Kubernetes.                                            |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *vmware*     | VMware vSphere (vCenter & ESXi).                       |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *sepm*       | Symantec Endpoint Protection Manager.                  |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *aci-direct* | Application Centric Infrastructure (ACI Direct         |                           |
|                    | |              | Connection).                                           |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *ibm*        | IBM Cloud Infrastructure.                              |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *nutanix*    | Nutanix Prism Central.                                 |                           |
|                    | +--------------+--------------------------------------------------------+                           |
|                    | | *sap*        | SAP Control.                                           |                           |
|                    | +--------------+--------------------------------------------------------+                           |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| update-interval    | Dynamic object update interval.   | integer             | Minimum value: 0    | 60                  |
|                    |                                   |                     | Maximum value: 3600 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| use-metadata-iam   | Enable/disable use of IAM role    | option              | \-                  | disable \*\*        |
|                    | from metadata to call API.        |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *disable*   | Disable using IAM role to call API.                    |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *enable*    | Enable using IAM role to call API.                     |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| user-id            | User ID.                          | string              | Maximum length: 127 |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| username           | Username of the remote SDN        | string              | Maximum length: 64  |                     |
|                    | connector as login credentials.   |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| vcenter-password   | vCenter server password for NSX   | password_aes256     | Not Specified       |                     |
|                    | quarantine.                       |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| vcenter-server     | vCenter server address for NSX    | string              | Maximum length: 127 |                     |
|                    | quarantine.                       |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| vcenter-username   | vCenter server username for NSX   | string              | Maximum length: 64  |                     |
|                    | quarantine.                       |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| verify-certificate | Enable/disable server certificate | option              | \-                  | enable              |
|                    | verification.                     |                     |                     |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | Option      | Description                                            |                            |
|                    | +=============+========================================================+                            |
|                    | | *disable*   | Disable server certificate verification.               |                            |
|                    | +-------------+--------------------------------------------------------+                            |
|                    | | *enable*    | Enable server certificate verification.                |                            |
|                    | +-------------+--------------------------------------------------------+                            |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+
| vpc-id             | AWS VPC ID.                       | string              | Maximum length: 31  |                     |
+--------------------+-----------------------------------+---------------------+---------------------+---------------------+

