import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const tenantSchema = tableSchema({
  name: 'tenants',
  columns: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'phone',
      type: 'string'
    },
    {
      name: 'description',
      type: 'string'
    },
    {
      name: 'method',
      type: 'string'
    },
    {
      name: 'created_at',
      type: 'number'
    },
    {
      name: 'value',
      type: 'string'
    },
    {
      name: 'street',
      type: 'string',
    },
    {
      name: 'city',
      type: 'string'
    },
    {
      name: 'district',
      type: 'string'
    },
    {
      name: 'number',
      type: 'number'
    }
  ]
}); 