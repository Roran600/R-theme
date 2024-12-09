---
title: " AMD Epyc oprava sata hotswapu "
date: 2024-12-08T16:29:21.722Z
draft: false
description: null
noindex: false
featured: false
pinned: false
series: null
categories:
    - Linux
    - Kernel
tags:
    - Linux
    - Sata
    - Hotswap
    - Kernel
images: null
---

Na serverových platformách AMD EPYC (Rome aj Milan) nefunguje hot-swap zo SATA v predvolenej konfigurácii na Ubuntu 22.04 LTS alebo Proxmox VE 7.x. Príčinou je nakonfigurovaná voľba jadra CONFIG_SATA_MOBILE_LPM_POLICY=3 v jadre Ubuntu, ktorá znižuje spotrebu energie mobilných zariadení. Zavádzacia voľba jadra ahci.mobile_lpm_policy=1 problém odstraňuje. Pri používaní systému Microsoft Windows (Server 2022, Server 2019, Windows 10) sa problémy s hot-swapom tiež nevyskytujú. 

<!--more-->




| CONFIG_SATA_MOBILE_LPM_POLICY | Popis                                                               | ata_lpm_policy_names / ata_lpm_policy   |
| ----------------------------- | ------------------------------------------------------------------- | --------------------------------------- |
|  |
| 0                             | Zachovať nastavenia firmvéru (predvolené nastavenie Vanilla Kernel) | ATA_LPM_UNKNOWN                         |                                                                                                                                                                                                                   
| 1                             | Maximálny výkon                                                     | ATA_LPM_MAX_POWER                       |                                                                                                                                                                                                                   
| 2                             | Stredný výkon                                                       | ATA_LPM_MED_POWER                       |                                                                                                                                                                                                                    
| 3                             | Stredný výkon so zapnutou funkciou PM iniciovanou zariadením        | ATA_LPM_MED_POWER_WITH_DIPM             |                                                                                                                                                                                                                    
|                               |                                                                     | ATA_LPM_MIN_POWER_WITH_PARTIAL          |                                                                                                                                                                                                                    
| 4                             | Minimálny výkon                                                     | ATA_LPM_MIN_POWER                       |                                                                                                                                                                                                                    