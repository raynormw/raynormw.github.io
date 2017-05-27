# cari_resto_bc

## Function

**Users**

| **Route**               | **HTTP** | **Description**                                     |
|-------------------------|----------|-----------------------------------------------------|
| /register               | POST     | Create user                                         |
| /login                  | GET      | User Login                                          |
| /login/twitter          | GET      | User Login with twitter account                     |
| /user/new               | POST     | Create user (admin only)                            |
| /user/all_users         | GET      | Get all user (admin only)                           |
| /user/find/:id          | GET      | View profile (admin and current user only)          |
| /user/delete/:id        | DELETE   | Delete profile (admin and current user only)        |
| /user/edit/:id          | POST     | Edit / Update profile (admin and current user only) |
| /twitter/search/:search | GET      | Search feature on twitter                           |
| /twitter/tweet          | POST     | tweet post feature on twitter                       |

**Restaurants (users must login first)**

| **Route**                                                                       | **HTTP** | **Description**                            |
|----------------------------------------------------------------------|----------|-------------------------------------------------------|
| /restaurants/help                                                    | GET      | View category, establishment, cuisines     |
| /restaurants?category=id&establishment=id&sort=cost&order=asc&cuisines=id | GET      | Search restaurants list                    |
| /restaurants/:id                                                     | GET      | View selected restaurants                  |
| /restaurants/go?origin=lat,lon&destination=lat,lon&avoid=tolls=metrics&mode=transit | GET  | View driving direction and current weather |

To Use
```javascript
npm install
npm run dev
```

## Team
* Poppy Sari :heart_eyes:
  [Github](http://www.github.com/ppsari)
* Ridho Pratama Putro :smirk:
  [Github](http://www.github.com/ridho0)
* Tirta Wirya Putra :sunglasses:
  [Github](http://www.github.com/raynormw)
