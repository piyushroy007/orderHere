import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/order-here-sign-logo-design-vector-template_567288-1173.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li> 
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "info": {
          "id": "769456",
          "name": "Pizza Hut",
          "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
          "locality": "Kalikapur",
          "areaName": "Kolkata",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-kalikapur-kolkata-kolkata-769456",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "194159",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Rashbehari Avenue",
          "areaName": "Rashbehari Avenue",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.4,
          "parentId": "166",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-rashbehari-avenue-kolkata-194159",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "3071",
          "name": "Jai Hind Dhaba",
          "cloudinaryImageId": "cdbdjcego1vt4reojqiy",
          "locality": "Bhawanipur",
          "areaName": "Bhawanipur",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "North Indian",
            "Indian",
            "Tandoor",
            "Kebabs",
            "Punjabi",
            "Home Food",
            "Chinese"
          ],
          "avgRating": 4.5,
          "parentId": "1928",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 05:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/jai-hind-dhaba-bhawanipur-kolkata-3071",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "39309",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39309.JPG",
          "locality": "Kasba",
          "areaName": "Kasba",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.5,
          "parentId": "547",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 02:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-kasba-kolkata-39309",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "453671",
          "name": "Wow! Chicken By Wow! Momo",
          "cloudinaryImageId": "ee9c2f12dd4fe8e3cb8c0e8a7ecc56be",
          "locality": "Anna Nagar",
          "areaName": "Acropolis Mall",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "American",
            "Snacks",
            "Beverages",
            "Continental"
          ],
          "avgRating": 4.3,
          "parentId": "268366",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 01:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/wow-chicken-by-wow-momo-anna-nagar-acropolis-mall-kolkata-453671",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "260151",
          "name": "Delights by INOX",
          "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
          "locality": "KOLKATA QUEST MALL",
          "areaName": "Ballygunge",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Snacks"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "385095",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/delights-by-inox-quest-mall-ballygunge-kolkata-260151",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "834096",
          "name": "The Dessert Heaven - Pastry, Brownie and Cakes",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/24/be393804-2d6a-4a9d-80e3-45383be0e346_834096.jpg",
          "locality": "KOLKATA MUNICIPAL CORPORATION",
          "areaName": "RASH BEHARI AVENUE",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Juices",
            "Bengali"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "506176",
          "avgRatingString": "4.7",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                "shortDescription": "Perfect cake delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-dessert-heaven-pastry-brownie-and-cakes-municipal-corporation-rash-behari-avenue-kolkata-834096",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "830565",
          "name": "Crusto's - Gourmet Cheese Burst Pizza",
          "cloudinaryImageId": "c77fe42b7997c566f491e84b540701ca",
          "locality": "Gariahat",
          "areaName": "Rash Behari Avenue",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Fast Food",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "268955",
          "avgRatingString": "4.3",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 05:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-gariahat-rash-behari-avenue-kolkata-830565",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "834825",
          "name": "ENSO - Sourdough Pizza by Nomad",
          "cloudinaryImageId": "5585f32b2ef84a5a951f635e87d853fe",
          "locality": "Bally gunge",
          "areaName": "Ballygunge",
          "costForTwo": "₹850 for two",
          "cuisines": [
            "Pizzas",
            "Fast Food",
            "Desserts",
            "Salads",
            "Beverages"
          ],
          "avgRating": 3.9,
          "parentId": "77344",
          "avgRatingString": "3.9",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/enso-sourdough-pizza-by-nomad-bally-gunge-ballygunge-kolkata-834825",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "834808",
          "name": "Nomad Pizza- Traveller Series",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/910a0476-820f-44dc-8e15-d4ae043baab7_834808.jpg",
          "locality": "Bally Gunge",
          "areaName": "Ballygunge",
          "costForTwo": "₹850 for two",
          "cuisines": [
            "Pizzas",
            "Fast Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "251919",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nomad-pizza-traveller-series-bally-gunge-ballygunge-kolkata-834808",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "165270",
          "name": "Mama Mia! - Italian Ice Creams & Cakes",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/95d3849e-1d02-4523-81e3-f2ec4b51ad09_165270.jpg",
          "locality": "Ballygunge",
          "areaName": "Ballygunge",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts",
            "Bakery",
            "Ice Cream Cakes"
          ],
          "avgRating": 4.7,
          "parentId": "471728",
          "avgRatingString": "4.7",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                "shortDescription": "Perfect cake delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-ballygunge-kolkata-165270",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "379886",
          "name": "The Brooklyn Creamery - Healthy Ice Cream",
          "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
          "locality": "Bally Gunge",
          "areaName": "South Kolkata",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Healthy Food"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "236673",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-bally-gunge-south-kolkata-kolkata-379886",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "566384",
          "name": "Faasos' Signature Wraps & Rolls",
          "cloudinaryImageId": "777ccff40c5bdc57a41d79facb0b8697",
          "locality": "KASBA INDUSTRIAL ESTATE",
          "areaName": "East Kolkata Township",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Fast Food",
            "Snacks",
            "North Indian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "parentId": "340366",
          "avgRatingString": "4.0",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹139"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-kasba-industrial-estate-east-kolkata-township-kolkata-566384",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "831433",
          "name": "Pastas By Pizza Hut",
          "cloudinaryImageId": "80ca62f0de020f8cbe39fd034d3325d5",
          "locality": "Kalikapur",
          "areaName": "Kolkata",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pastas"
          ],
          "avgRating": 3.8,
          "parentId": "306806",
          "avgRatingString": "3.8",
          "totalRatingsString": "10+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-07 04:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-kalikapur-kolkata-kolkata-831433",
          "type": "WEBLINK"
        }
      }
]

const ResturantCard = (props) => {
  const {resData} = props;
  const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla} = resData;
    return (
        <div className="resturant-card">
            <img className="res-img" 
              alt={name} 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}>
            </img>
            <p>{name}</p>
            <p>{costForTwo}</p>
            <p className="cuisines">{cuisines.join(', ')}</p>
            <p>ETA : {sla.deliveryTime} mins</p>
            <p>{"Ratings :"+avgRating}</p>
        </div>
    )
}

const searchBarStyle = {
    border: "1px solid black"
}
const Body = () => {
    return (
        <div className="body">
            <div className="search" style={searchBarStyle  }>Search</div>
            <div className="resturant-container">
              {
                resList.map((items)=>(
                  <ResturantCard key={items.info.id} resData={items.info} />
                ))
              }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);