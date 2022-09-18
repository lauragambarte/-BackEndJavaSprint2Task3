db.createCollection('cliente', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'cliente',
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido: {
                    bsonType: 'string'
                },
                direccion: {
                    bsonType: 'object',
                    title: 'direccion',
                    properties: {
                        localidad: {
                            bsonType: 'string'
                        },
                        provincia: {
                            bsonType: 'string'
                        },
                        codigo_postal: {
                            bsonType: 'string'
                        },
                        direccion: {
                            bsonType: 'string'
                        }
                    }
                },
                telefono: {
                    bsonType: 'string'
                }
            }
        }
    }
});
db.createCollection('orden', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'orden',
            required: ['tienda', 'cliente'],
            properties: {
                fecha_hora: {
                    bsonType: 'timestamp'
                },
                lugar: {
                    enum: ['domicilio', 'takeaway']
                },
                productos: {
                    bsonType: 'array',
                    items: {
                        title: 'producto_cantidad',
                        required: ['producto'],
                        properties: {
                            producto: {
                                bsonType: 'objectId'
                            },
                            cantidad: {
                                bsonType: 'int'
                            }
                        }
                    }
                },
                tienda: {
                    bsonType: 'objectId'
                },
                empleado: {
                    bsonType: 'objectId'
                },
                cliente: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('producto', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'producto',
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                descripcion: {
                    bsonType: 'string'
                },
                imagen: {
                    bsonType: 'string'
                },
                precio: {
                    bsonType: 'decimal'
                },
                categoria: {
                    bsonType: 'string'
                }
            }
        }
    }
});
db.createCollection('tienda', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'tienda',
            properties: {
                direccion: {
                    bsonType: 'object',
                    title: 'direccion',
                    properties: {
                        localidad: {
                            bsonType: 'string'
                        },
                        provincia: {
                            bsonType: 'string'
                        },
                        codigo_postal: {
                            bsonType: 'string'
                        },
                        direccion: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});
db.createCollection('empleado', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'empleado',
            required: ['tienda'],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apelllido: {
                    bsonType: 'string'
                },
                NIF: {
                    bsonType: 'string'
                },
                telefono: {
                    bsonType: 'string'
                },
                tarea: {
                    bsonType: 'string'
                },
                tienda: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});