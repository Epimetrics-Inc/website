---
title: "PolicyMiner: \n
Search and Access Administrative Policies from the Philippine Department of Health "

# Article Details
featured_image_alt: https://policyminer.epimetrics.com.ph/static/img/logo.7afa7c2.png
date: 2018-07-30
authors:
- name: Hadrian Paulo M. Lim, MS
  roles: eHealth Division Head
  photo_url: /img/staff/HML.png
  description: "Hadrian Paulo Lim has a Master of Science in Computer Science from Ateneo de Manila University. He has previously worked on various research projects and initiatives with EpiMetrics, mostly focused on applying algorithms, simulations modeling, and machine learning techniques. Currently, he leads the projects and initiatives of the eHealth division of EpiMetrics, Inc." 
featured: false
internal_url: 2018/07/30/Introducing-PolicyMiner.html
---

Public documents and policies have an accessibility problem. EpiMetrics, in partnership with the Department of Health, has developed _PolicyMiner_ to enable information dissemination of national policies for public health and beyond.

## What Are We Trying to Solve?

Regularly, governments departments and agencies issue administrative policies that guide and implement their national programs. However, these policies are often difficult to explore and access due to the use of portable document formats, or PDFs. The portable document format, when improperly utilized, is unable to accurately store text and proper formatting. Though legible to the human eye, computers and digital technologies won’t be able to comprehend these documents without having undergone complex data extraction processes.

![](https://i.imgur.com/kada9fR.png){: .size-large .align-center}
_Example of an improper PDF page. Documents are scanned with no retrievable text._
{: .image-caption}

The widespread use of scanned copies does not allow for text selection and retrieval. Paired with the torrential amount of documents available, amounting to thousands accumulated from previous administrations, searching is currently not possible. Search algorithms and search engines have already been able to address exploration problems but due to the nature of the file format that was used, these technologies are inefficient and unusable.

![](https://policyminer.epimetrics.com.ph/static/img/logo.7afa7c2.png){: .size-small .align-center}

## Introducing _PolicyMiner_

EpiMetrics has developed a clean and accessible web application that allows anyone access to all of the current administrative orders of the Department of Health. _PolicyMiner_ provides users with the power of a battle-tested full-text search engine, powered by Postgres, which allows for full exploratory document search and retrieval.

![](https://i.imgur.com/YqM8iiJ.png){: .size-medium .align-center}

Using conventional data mining and knowledge discovery algorithms, _PolicyMiner_ also enables sorting and filtering of documents by administration. We're working on including machine-learning based features for determining the themes of each administrative document.

![](https://i.imgur.com/6r1KIh2.png){: .size-medium .align-center}

We've also built _PolicyMiner_ for the users to print and format administrative documents for their own use. We hope that this enables you to retrieve information in a clean and streamlined process. 

Come check us out at [https://policyminer.epimetrics.com.ph](https://policyminer.epimetrics.com.ph)

## Document Term Relationships and Data Visualization

For those interested in knowledge and theme discovery, we’ve crunched the numbers and applied machine learning and text mining algorithms on all of the available administrative orders. We’re providing these results as free and open-source work, compatible with VOSViewer.

![](https://policyminer.epimetrics.com.ph/static/img/vos_view_file.da7d527.png){: .size-medium .align-center}
_Document and Word Theme Visualization using VOSViewer._
{: .image-caption}

Through VOSViewer, an incredible open-source visualization tool by Leiden University, you'll be able to explore the most common words and themes in the corpus of administrative orders, with their usage proximity in relation to other terms. Clusters have also been generated automatically, which may provide some insights on term groupings.  We hope that this work may be used to identify policy gaps and strengthen areas which may have been overlooked or neglected. 

Data mining products and techniques have already been adopted for supporting governance in multiple governments, such as the United States of America and the European Union. We hope that our work contributes to the initiative of using modern technology to promote data-driven decision-making. At EpiMetrics, we’re continuously working on state of the art products and solutions that aid in policy-making and governance in public health. 

Interested in the project? See the [Project Article]({% link _projects/Omnibus-Policies.md %}){:target="blank"}

Want to get to know us? Let’s get in touch at [https://epimetrics.com.ph](https://epimetrics.com.ph/#contact-us)
