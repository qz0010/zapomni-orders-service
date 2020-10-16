## Хост для разработки

На хосте `planetarium-widget.lastick.xd.unitix.cloud` сейчас можно делать тестовые заказы,
оплачивать их способом оплаты `google pay` (пароль подтверждения оплаты `12345678`).

## Endpoint для разработки

```https://planetarium-widget.lastick.xd.unitix.cloud/api/widget/v1```

Все `POST`-запросы должны иметь заголовок `'Content-Type': 'application/json'`.

## Общие текстовые правила возврата витрины

Для использования в случаях, когда нет позиции заказа, от которой можно вычислить применяемые правила возврата.

```
[GET] /info/refund-rules
```

## Обратная связь

```
[POST] /feedback
```
Тело запроса
```json
{"email": "sms",
"phone": "79161175154",
"message": "User feedback",
"event": "Event name",
"schedule": "Schedule Name"}
```
Ответ сервера `status: 201`

## Аутентификация посетителя по телефонному номеру, запрос кода подтверждения
```
[POST] /login
```
Тело запроса
```json
{"type": "sms", "phone": "79161175154"}
{"type": "sms", "phone": "8 (916) 117-51-54"}
```
Ответ сервера `status: 201`

## Аутентификация посетителя по телефонному номеру и коду
```
[POST] /login
```
Тело запроса
```json
{"type": "sms", "phone": "79161175154", "code": 9493}
```
Ответ сервера `status: 204`

## Список заказов авторизованного посетителя

```
[GET] /account/order
```

Тело ответа
```json
[
    {
        "data": {
            "uuid": "94fa4af7-60b5-4bd8-8c2d-4df2a8d89c21",
            "number": "6065188",
            "total_cost": "60000",
            "total_count": 3,
            "email": "al.kolpak@gmail.com",
            "phone": "+79161175154",
            "ExtOrdersContainer": [
                {
                    "data": {
                        "uuid": "e37e1ad9-6ded-450f-9d56-c55f73e4af0b",
                        "number": "19582359",
                        "OrderItemsContainer": [
                            {
                                "data": {
                                    "uuid": "2cf4998e-fcda-45ae-9cef-ed3f5a0047c0",
                                    "number": "42976018",
                                    "currency": "rur",
                                    "nominal_price": "20000",
                                    "price": "20000",
                                    "total_sum": "20000",
                                    "ProductItem": {
                                        "ProductDesc": {
                                            "uuid": "82946dde-dd0b-4d08-8480-17de97c93257",
                                            "name": {
                                                "en": null,
                                                "ru": "Полет фантазии"
                                            },
                                            "short_name": {
                                                "en": null,
                                                "ru": "Полет фантазии"
                                            }
                                        },
                                        "Schedule": {
                                            "uuid": "8d618531-a77d-4ab9-8f4d-9c59d5d0cb8c",
                                            "begin": "2020-10-12 20:35:00",
                                            "end": "2020-10-12 20:43:00"
                                        },
                                        "HallPlace": {
                                            "uuid": "89855dfd-aed3-47a0-996f-e50cb0118d3b",
                                            "meta": {
                                                "row": {
                                                    "name": "1",
                                                    "uuid": "06d94019-1dec-4b02-b926-3776545a38cc",
                                                    "prefix": null
                                                },
                                                "seat": "5",
                                                "group": null,
                                                "sector": null,
                                                "fragment": {
                                                    "name": {
                                                        "ru": null
                                                    },
                                                    "uuid": "c0a3d7a9-904f-41b9-a7a7-6e6ec53e512d"
                                                },
                                                "group_size": null
                                            }
                                        },
                                        "Hall": {
                                            "uuid": "a92dc826-9321-4137-9ded-ac3a8bf1c38b",
                                            "name": {
                                                "en": "Small starry hall",
                                                "ru": "Малый звёздный зал"
                                            },
                                            "short_name": {
                                                "ru": "Малый звёздный зал"
                                            }
                                        },
                                        "Spot": {
                                            "uuid": "2e8797e6-39c2-48b5-857a-ef4331060672",
                                            "name": {
                                                "ru": "Планетарий"
                                            },
                                            "short_name": {
                                                "ru": "Планетарий"
                                            }
                                        },
                                        "SeasonEvent": null
                                    }
                                },
                                "meta": {
                                    "operations": {
                                        "refund": {
                                            "allow": true,
                                            "value": [
                                                {
                                                    "rule": "refund_date",
                                                    "value": "2020-10-12T19:36:00.000Z",
                                                    "allow": true
                                                }
                                            ]
                                        }
                                    }
                                },
                                "eticket": "/tickets/12/c9/94fa4af7-60b5-4bd8-8c2d-4df2a8d89c21/42976018",
                                "refund_fee": 0,
                                "refund_rules": [
                                    {
                                        "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2746",
                                        "rule": {
                                            "value": {
                                                "value": 0,
                                                "interval": {
                                                    "days": -5
                                                },
                                                "value_type": "factor"
                                            }
                                        }
                                    },
                                    {
                                        "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2745",
                                        "rule": {
                                            "value": {
                                                "value": 0,
                                                "interval": {
                                                    "days": -1
                                                },
                                                "value_type": "factor"
                                            }
                                        }
                                    },
                                    {
                                        "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2744",
                                        "rule": {
                                            "value": {
                                                "value": 0,
                                                "interval": {
                                                    "days": 0
                                                },
                                                "value_type": "factor"
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    "meta": {
                        "operations": {
                            "refund": {
                                "allow": true
                            }
                        },
                        "refund_rules": [
                            {
                                "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2746",
                                "rule": {
                                    "value": {
                                        "value": 0,
                                        "interval": {
                                            "days": -5
                                        },
                                        "value_type": "factor"
                                    }
                                }
                            },
                            {
                                "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2745",
                                "rule": {
                                    "value": {
                                        "value": 0,
                                        "interval": {
                                            "days": -1
                                        },
                                        "value_type": "factor"
                                    }
                                }
                            },
                            {
                                "uuid": "51a485fc-3aa1-4736-b216-ce3a8f2d2744",
                                "rule": {
                                    "value": {
                                        "value": 0,
                                        "interval": {
                                            "days": 0
                                        },
                                        "value_type": "factor"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "meta": {
            "operations": {
                "refund": {
                    "allow": true
                },
                "resend_notifications": {
                    "allow": true
                },
                "resend_email": {
                    "allow": true
                },
                "resend_sms": {
                    "allow": false
                }
            }
        }
    }
]
```

В объекте "заказ", в атрибуте `meta` есть указание на том можно ли осуществить возврат всего заказа.

Атрибут `ExtOrdersContainer`, это - список внешних заказов, именно он "группирует" билетики на экране "информация о заказе". `ExtOrder.meta.refund_rules` содержит информацию о правилах возврата этой конкретной группы билетов. `value.interval` - количество дней (postgresql interval, нужно загрузить какую-то билиотечку для правильной интерпретации), в `value.value` - размер комиссии, т.е. для того чтобы показать "вам вернется 30% от суммы" нужно из 100 вычесть `value.value`.

В `ExtOrder.OrderItemsContainer` находятся позиции заказа. `OrderItem.meta.operations` содержит информацию о том можно ли сделать возврат позиции. Размер комиссии возрата в `OrderItem.meta.refund_fee`. Сколько денег вернётся клиенту вычисляется как `OrderItem.data.total_sum - OrderItem.meta.refund_fee`. Правила возврата отдельной позиции лежат в `OrderItem.meta.refund_rules`.

Остальные вещи, которые понадобятся для показа информации о билете, я оставил в примере тела ответа, не буду описывать их подробно.



## Возврат позиции заказа

```
[DELETE] /account/order/item/:order_item_uuid
```
Ответ сервера `status: 204`

## Возврат заказа

```
[DELETE] /account/order/:order_uuid
```
Ответ сервера `status: 204`

## Редактирование контактных данных заказа

```
[POST] /account/order/:order_uuid
```
Тело запроса
```json
{"email":"example@example.com"}
{"phone":"12345678900"}
{"email":"example@example.com","phone":"12345678900"}
```
Ответ сервера `status: 204`

## Повторная отправка письма с заказом на email заказа

```
[GET] /account/order/:order_uuid/send
```
Ответ сервера `status: 204`
