<template>
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo">{{ logo }}</div>
        <ul class="nav-links">
          <li @mouseover="showDropdownCompany = true" @mouseleave="showDropdownCompany = false">
            <a href="#">{{ listedCompany }}</a>
            <ul v-if="showDropdownCompany" class="dropdown">
              <li><a href="#">{{companyData}}</a></li>
              <li><a href="#">{{companyDividend}}</a></li>
              <li><a href="#">{{companyEPS}}</a></li>
              <li><a href="#">{{monRevenue}}</a></li>
            </ul>
          </li>         
        </ul>
        <ul class="nav-links">
          <li @mouseover="showDropdownInvest = true" @mouseleave="showDropdownInvest = false">
            <a href="#">{{ investArea }}</a>
            <ul v-if="showDropdownInvest" class="dropdown">
              <li><a href="#">{{stockIndex}}</a></li>
              <li><a href="#">{{currencyExchangeRate}}</a></li>
              <li><a href="#">{{monBonds}}</a></li>
            </ul>
          </li>         
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        logo: '查詢好地方',
        listedCompany: '上市公司',
        companyData: '上市公司基本資料',
        companyDividend: '上市公司股利分派情形',
        companyEPS: '上市公司各產業EPS統計資訊',
        monRevenue:'上市公司每月營業收入彙總表',
        investArea:'投資專區',
        stockIndex:'每月國際主要股價指數',
        currencyExchangeRate:'國際主要國家貨幣每月匯率概況',
        monBonds:'國內債券每月發行概況',
        showDropdownCompany: false,
        showDropdownInvest: false,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .navbar {
    background-color: #00a0e9;
    padding: 10px 20px;
    width: 100%;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .nav-links li {
    position: relative;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1em;
    display: inline-block;
    padding: 10px 15px; 
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 200px; 
  }
  
  .dropdown li {
    width: 100%;
  }
  
  .dropdown a {
    color: black;
    padding: 12px 16px;
    display: block;
    text-decoration: none;
  }
  
  .dropdown a:hover {
    background-color: #ddd;
  }
   
  .content {
    padding-top: 60px; 
  }
  </style>
  