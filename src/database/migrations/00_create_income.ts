import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('income',table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('value').notNullable();
        /* table.date('received_date').notNullable(); */
    });
}

export async function down(knex:Knex){
    return knex.schema.dropTable('income');
}