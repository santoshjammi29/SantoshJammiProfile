# Santosh Jammi
### Principal Data Architect | GenAI & Lakehouse Systems | Microsoft Fabric (DP-600) & Azure Native | Cloud FinOps Specialist

[🌐 Live Resume Website](https://santosh-jammi-resume.vercel.app/) | [💼 LinkedIn Profile](https://linkedin.com/in/santoshjammi29) | [✉️ Email](mailto:santu.jammi@gmail.com) | 📱 +91-9110580037 | 📍 Hyderabad, India

---

## 🎖️ Microsoft Certifications
![DP-600](https://img.shields.io/badge/Microsoft-DP--600_Fabric_Analytics_Engineer-blue?style=flat-square&logo=microsoft)
![DP-203](https://img.shields.io/badge/Microsoft-DP--203_Azure_Data_Engineer-blue?style=flat-square&logo=microsoft)
![PL-300](https://img.shields.io/badge/Microsoft-PL--300_Power_BI_Analyst-blue?style=flat-square&logo=microsoft)
![AI-900](https://img.shields.io/badge/Microsoft-AI--900_Azure_AI_Fundamentals-blue?style=flat-square&logo=microsoft)
![DP-900](https://img.shields.io/badge/Microsoft-DP--900_Data_Fundamentals-blue?style=flat-square&logo=microsoft)
![AZ-900](https://img.shields.io/badge/Microsoft-AZ--900_Azure_Fundamentals-blue?style=flat-square&logo=microsoft)

---

## 📝 Professional Summary
Strategic **Principal Data Architect** with **8+ years of experience** and a proven **5-year track record** of leading high-performance engineering squads and managing direct executive stakeholder engagements. Expert in architecting scalable **Medallion Lakehouse platforms on Microsoft Azure and Microsoft Fabric**, designing **enterprise GenAI / RAG data pipelines**, and bridging technical delivery with executive business vision. Pioneer in **Cloud FinOps**, slashing operational spend and latency by **40%+** through dynamic DIU allocation and Fabric Capacity Unit (CU) optimization. Deep domain expertise in the **EU BFSI sector**, enforcing rigorous GDPR, data sovereignty, and Zero Trust governance while delivering **99.9% mission-critical platform reliability**.

---

## 🛠️ Core Technical Competencies

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Core & GenAI Architecture** | Medallion Architecture (Bronze/Silver/Gold), GenAI Data Pipelines, RAG Architecture, Vector Search (Azure AI Search), Microsoft Fabric Copilot, Semantic Caching, Data Mesh, Zero-Copy Architecture, Cloud FinOps, Disaster Recovery (DR), Kimball Modeling, Data Vault 2.0, Star / Snowflake Schemas, SCDs |
| **Microsoft Fabric & Azure** | Microsoft Fabric (DP-600), OneLake & Direct Lake Mode, Capacity Unit (CU) Optimization, F-SKU Capacity Planning, Azure Synapse Analytics, Azure Data Factory (ADF), ADLS Gen2, Azure Purview, Real-Time Intelligence, Azure OpenAI Integration, Azure SQL, Cosmos DB, Azure Monitor / KQL |
| **Big Data, Databricks & Pipelines** | Databricks & Unity Catalog, Apache Spark 3.5+, PySpark, Apache Iceberg, Delta Lake UniForm, Liquid Clustering, Z-Ordering, Spark Structured Streaming, Event Hubs & Kafka, dbt Core & dbt Mesh, Apache Airflow, ADF Mapping Data Flows, Idempotent Pipeline Design, SCD Type 2, ACID Delta Lake, MERGE INTO |
| **DevOps, DataOps & Governance** | Azure DevOps CI/CD (YAML), GitOps, Automated Data Observability, Great Expectations, Row/Column-Level Security (RLS/CLS), GDPR Compliance, Data Sovereignty, EU AI Act, Azure Key Vault, Service Principals, Entra ID (Azure AD), RBAC, Advanced T-SQL, KQL, ARM Templates, Schema Evolution, 99.9% Platform SLA |

---

## 💼 Professional Experience

### Senior Data Engineer
**Tata Consultancy Services — EU BFSI / Enterprise** | *April 2022 – Present*
* **Leadership**: Served as primary technical point of contact for onsite Product Owners and Architects, facilitating requirement discovery, governing offshore delivery of 5+ senior engineers, and ensuring zero schedule slippage across all sprint deliverables.
* **Lakehouse**: Designed a robust Medallion Architecture (Bronze / Silver / Gold) managing 5TB+ data. Implemented idempotent ETL patterns with strict integrity constraints (MERGE INTO, ACID Delta Lake, and Apache Iceberg / Delta UniForm interoperability) to ensure 100% data consistency across all pipeline retries and transient cluster failures.
* **GenAI & RAG**: Engineered automated data preparation and embedding pipelines for enterprise GenAI / RAG workloads utilizing Azure OpenAI and Azure AI Search; integrated Microsoft Fabric Copilot for accelerated natural-language data discovery across high-volume repositories.
* **FinOps**: Led compute optimization — dynamically tuning DIUs and Parallelism in Azure Data Factory and governing Fabric Capacity Units (CUs) — delivering a 40% reduction in data processing latency and significant recurring cloud cost savings across enterprise pipelines.
* **Fabric**: Architected resilient Microsoft Fabric semantic models using Direct Lake mode over OneLake, strictly managing F64 capacity memory guardrails (25 GB threshold) to entirely eliminate refresh failures and deliver sub-second render speeds for C-level dashboards.
* **DevOps & DataOps**: Automated CI/CD via Azure DevOps / YAML with automated rollback strategies; enforced strict Schema Evolution policies and automated data quality checks to maintain 100% downstream platform stability with 99.9% availability under GDPR compliance.

### Senior Data Engineer
**Larsen & Toubro Infotech (LTIMindtree) — Enterprise Data** | *April 2021 – April 2022*
* **ETL Performance**: Re-engineered legacy pipelines using Azure Data Factory, solving the Small File Problem and cutting query execution times by 40% through parallelism tuning, partition optimization, and Integration Runtime right-sizing.
* **Reporting**: Redesigned Power BI models with aggregation tables, improving report load speeds by 25% and achieving high availability across all executive and operational reporting workloads.

### Technology Analyst → Senior System Engineer → System Engineer
**Infosys Limited — Enterprise Technology** | *December 2017 – April 2021*
* **Data Quality**: Improved data model accuracy by 20% through automated data cleansing and validation frameworks, establishing consistent data quality standards across enterprise financial reporting pipelines.
* **Security**: Integrated Power BI with SaaS applications, implementing Row-Level Security (RLS) for sensitive financial data and designing role-based access controls governing the end-to-end lifecycle from data modeling to dashboard deployment.
* **Performance**: Increased data processing efficiency by 15% through advanced T-SQL query tuning, index optimization, and stored procedure refactoring across large-scale SQL Server and Azure SQL workloads.
* **Platform**: Collaborated with cross-functional teams to develop high-impact data products utilizing SQL Server and Azure services for efficient large-scale processing, supporting business intelligence initiatives across multiple domains.

---

## 🏗️ Key Projects & Architectural Highlights

### ⚡ 5TB Medallion Lakehouse & Open Table Formats (TCS)
* **Goal**: Design a scalable Bronze-Silver-Gold Medallion architecture managing 5TB+ data for EU BFSI clients at TCS.
* **Architecture**: Integrated Fabric, Delta Lake, Apache Iceberg (Delta UniForm), ADLS Gen2, and Azure Purview. Implemented idempotent MERGE INTO patterns to guarantee 100% data consistency.
* **Impact**: Achieved 99.9% platform reliability and full GDPR data sovereignty compliance.

### 📊 Microsoft Fabric Direct Lake Semantic Layer & Copilot (TCS)
* **Goal**: Modernize executive reporting, eliminate data refresh failures, and accelerate data discovery.
* **Architecture**: Modelled Direct Lake datasets in Microsoft Fabric over OneLake shortcuts. Enforced F64 capacity guardrails (25 GB memory limit) and integrated Copilot-assisted analytics.
* **Impact**: Eliminated refresh failures and bypassed import latency for high-availability executive reporting.

### 🤖 Enterprise GenAI & RAG Data Pipeline Architecture (TCS)
* **Goal**: Prepare enterprise unstructured and structured data for real-time generative AI consumption.
* **Architecture**: Scalable ingestion and chunking pipelines using PySpark, ADF, Azure OpenAI embedding generation, and Azure AI Search vector indexes with semantic caching.
* **Impact**: Enabled sub-second hybrid vector search retrieval across enterprise document and transaction repositories.

### 💡 FinOps & Compute Optimization — DIU & Capacity Tuning (TCS)
* **Goal**: Reduce recurring cloud infrastructure expenses for batch pipelines and lakehouse compute.
* **Architecture**: Dynamically optimized DIU allocation and cluster parallelism in ADF, resolved Integration Runtime bottlenecks, and managed Fabric Capacity Unit smoothing.
* **Impact**: Reduced data processing latency by 40% while delivering significant recurring monthly cloud cost savings.

### ⚙️ ADF Pipeline Re-engineering — Small File Elimination (LTI)
* **Goal**: Eliminate performance bottlenecks in high-volume batch data pipelines.
* **Architecture**: Re-engineered legacy ETL pipelines in Azure Data Factory to solve the Small File Problem. Redesigned Power BI datasets with aggregation tables.
* **Impact**: Cut query execution times by 40% and improved report load speeds by 25% across all operational workloads.

---

## 🎓 Education
* **B.Tech – Electrical & Electronics Engineering (EEE)** — 70% | *Raghu Engineering College, Visakhapatnam (Aug 2013 – May 2017)*
* **Intermediate – MPC** — 90% | *Narayana Junior College, Vizianagaram (May 2011 – May 2013)*
* **Class 10th** — 90% | *New Central School, Vizianagaram (Mar 2010 – Mar 2011)*
