---
title: "Roran60 Blog"
description: Build fast, responsive sites with Hugo Bootstrap Framework
date: 2022-09-24T18:24:31+08:00
draft: false
layout: landing
nav_icon:
  vendor: bs
  name: house
header:
  banner:
    alignment: center
    img: banners/home.svg
    title: |
      Roran60 Blog
      { .text-uppercase .mb-5 data-aos="fade-up" }
    description: |
      **Hardwér** - **Softwér** - **Opensource**
      { .mb-5 data-aos="fade-up" data-aos-delay="200" }

      {{< html/div
        data-aos="fade-up"
        data-aos-delay="300"
        class="d-grid gap-3 d-sm-flex justify-content-sm-center flex-wrap" >}}
        {{< bs/btn-link style=light size=lg class="py-3" url="/docs" >}}
          {{< icons/icon vendor=bootstrap name=book className="me-1" >}} Wiki
        {{< /bs/btn-link >}}
        {{< bs/btn-link style=light size=lg class="py-3" url="/blog" >}}
          {{< icons/icon vendor=font-awesome-solid name=blog className="me-1" >}} Blog
        {{< /bs/btn-link >}}
        {{< bs/btn-link style=light size=lg class="py-3" url="/gallery" >}}
          {{< icons/icon vendor=bootstrap name=camera className="me-1" >}} Galéria
        {{< /bs/btn-link >}}
      {{< /html/div >}}
# menu:
#   main:
#     name: Home
#     weight: 1
#     params:
#       icon:
#         vendor: bootstrap
#         name: house
---

## Sponsors {#sponsors .text-center .mb-5}



## Features {#features .text-center .mb-5}

{{< bs/icon-grid data="en.features" linkText="" alignment="center" >}}

## Latest Articles {.text-center .mb-5}

{{< bs/article-cards linkText="" >}}

## Who's Using HB Framework? {#sites .text-center .mb-4 }

[How to add my sites?]({{< relref "/blog" >}})
{ .lead .mb-3 .text-body .text-center }

