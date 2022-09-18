db.createCollection('Proveedores', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Proveedores',
            properties: {
                name: {
                    bsonType: 'string'
                },
                telefono: {
                    bsonType: 'string'
                },
                fax: {
                    bsonType: 'string'
                },
                nif: {
                    bsonType: 'string'
                },
                direccion: {
                    bsonType: 'object',
                    title: 'direccion',
                    properties: {
                        carrer: {
                            bsonType: 'string'
                        },
                        numero: {
                            bsonType: 'string'
                        },
                        piso: {
                            bsonType: 'string'
                        },
                        puerta: {
                            bsonType: 'string'
                        },
                        codigo_postal: {
                            bsonType: 'string'
                        },
                        ciudad: {
                            bsonType: 'string'
                        },
                        pais: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});
db.createCollection('Clientes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Clientes',
            properties: {
                name: {
                    bsonType: 'string'
                },
                telefono: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string'
                },
                data_registro: {
                    bsonType: 'date'
                },
                direccion: {
                    bsonType: 'object',
                    title: 'direccion',
                    properties: {
                        carrer: {
                            bsonType: 'string'
                        },
                        numero: {
                            bsonType: 'string'
                        },
                        piso: {
                            bsonType: 'string'
                        },
                        puerta: {
                            bsonType: 'string'
                        },
                        codigo_postal: {
                            bsonType: 'string'
                        },
                        ciudad: {
                            bsonType: 'string'
                        },
                        pais: {
                            bsonType: 'string'
                        }
                    }
                },
                recomendado: {
                    bsonType: 'string'
                }
            }
        }
    }
});
db.createCollection('gafas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'gafas',
            required: ['marca'],
            properties: {
                precio: {
                    bsonType: 'decimal'
                },
                montura: {
                    bsonType: 'object',
                    title: 'montura',
                    properties: {
                        tipo: {
                            enum: ['flotant',
                            'pasta',
                            'metalica']
                        },
                        color: {
                            bsonType: 'string'
                        }
                    }
                },
                vidrio_izquierdo: {
                    bsonType: 'object',
                    title: 'vidrio',
                    properties: {
                        graduacion: {
                            bsonType: 'decimal'
                        },
                        color: {
                            bsonType: 'string'
                        }
                    }
                },
                vidrio_derecho: {
                    bsonType: 'object',
                    title: 'vidrio',
                    properties: {
                        graduacion: {
                            bsonType: 'decimal'
                        },
                        color: {
                            bsonType: 'string'
                        }
                    }
                },
                marca: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('marca', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'marca',
            required: ['Proveedores'],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                Proveedores: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('venta', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'venta',
            required: ['gafas', 'empleado', 'Clientes'],
            properties: {
                gafas: {
                    bsonType: 'objectId'
                },
                empleado: {
                    bsonType: 'objectId'
                },
                Clientes: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('empleados', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'empleados',
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido: {
                    bsonType: 'string'
                }
            }
        }
    }
});