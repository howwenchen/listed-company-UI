<template>
    <div class="banner">
      <div class="banner-content">
        <div class="breadcrumbs">
          <a href="#"><img src="" alt="Home"></a> 
          <span>/</span>
          <a href="#">{{title}}</a>
          <span>/</span>
          <a href="#">{{subtitle}}</a>
        </div>
        <div class="banner-info">
          <h1>{{subtitle}}</h1>
          <p>本資料集提供與本行合作產險公司之商品資訊。</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        logo: '查詢好地方',
        title: '上市公司',
        subtitle: '上市公司基本資料',
        companyDividend: '上市公司股利分派情形',
        companyEPS: '上市公司各產業EPS統計資訊',
        monRevenue:'上市公司每月營業收入彙總表',
        investArea:'投資專區',
        stockIndex:'每月國際主要股價指數',
        currencyExchangeRate:'國際主要國家貨幣每月匯率概況',
        monBonds:'國內債券每月發行概況',
      };
    },
    props: [title, subtitle],

  };
</script>
  <style scoped>
  .banner {
    background-color: #f0f4f8;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .banner-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .breadcrumbs {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
  }
  
  .breadcrumbs a {
    color: #007bff;
    text-decoration: none;
  }
  
  .breadcrumbs span {
    margin: 0 5px;
  }
  
  .banner-info {
    text-align: center;
  }
  
  .banner-info h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .banner-info p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #666;
  }
  
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .rating p {
    margin: 5px 0;
  }
  
  .stars {
    color: gold;
    font-size: 24px;
  }
  </style>
  