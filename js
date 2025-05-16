

db.createCollection("software");

db.software.insert(
    [
        {"_id": "Soft001",
            "Software system":{
                "name": "VSCode",
                "vendor": "Tech1",
                "price": 100,
                "processorSpeed": 2.8,
                "minmumRam": 8,
                "freePersistent": true,
                "releaseNumber": "v1.0",
                "releaseDate": ISODate("2023-01-01"),
                "installedOn":[
                    {
                       "IPAdress": "1.1.1.1" ,
                       "BIOSSignature": "D12345ABC" ,
                       "installDate": ISODate("2024-01-01"),
                       "room": {
                        "bldg#": "B1",
                        "room#": "101",
                        "area": 40,
                        "capacity": 15,
                        "type": "Laboratory",
                        "securityLevel": "high",
                        "visualEquipmentAsset": ["Projector", "Camera"]
                       }
                    },
                    {
                       "IPAdress": "2.2.2.2" ,
                       "BIOSSignature": "E12345ABC" ,
                       "installDate": ISODate("2024-02-01"),
                       "room": {
                        "bldg#": "B2",
                        "room#": "102",
                        "area": 50,
                        "capacity": 20,
                        "type": "Office",
                       }
                    },
                ]
            }
        },
        {"_id": "Soft002",
            "Software system":{
                "name": "DevC++",
                "vendor": "Tech2",
                "price": 200,
                "processorSpeed": 3.0,
                "minmumRam": 16,
                "freePersistent": true,
                "releaseNumber": "v2.0",
                "releaseDate": ISODate("2022-02-01"),
                "installedOn":[
                    {
                       "IPAdress": "2.2.1.1" ,
                       "BIOSSignature": "F12345ABC" ,
                       "installDate": ISODate("2024-03-01"),
                       "room": {
                        "bldg#": "B4",
                        "room#": "106",
                        "area": 35,
                        "capacity": 10,
                        "type": "Laboratory",
                        "securityLevel": "high",
                        "visualEquipmentAsset": ["Projector", "Camera"]
                       }
                    },
                    {
                       "IPAdress": "3.2.2.2" ,
                       "BIOSSignature": "G12345ABC" ,
                       "installDate": ISODate("2024-05-01"),
                       "room": {
                        "bldg#": "A1",
                        "room#": "109",
                        "area": 40,
                        "capacity": 10,
                        "type": "Office",
                       }
                    },
                ]
            }
        },
    ]
)
