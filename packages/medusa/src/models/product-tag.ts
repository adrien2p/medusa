import {
  Entity,
  BeforeInsert,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
} from "typeorm"
import { BaseEntity } from "./_base"
import { ulid } from "ulid"
import { resolveDbType, DbAwareColumn } from "../utils/db-aware-column"

@Entity()
export class ProductTag extends BaseEntity {
  prefixId = "ptag"

  @Column()
  value: string
}

/**
 * @schema product_tag
 * title: "Product Tag"
 * description: "Product Tags can be added to Products for easy filtering and grouping."
 * x-resourceId: product_tag
 * properties:
 *   id:
 *     description: "The id of the Product Tag. This value will be prefixed with `ptag_`."
 *     type: string
 *   value:
 *     description: "The value that the Product Tag represents (e.g. \"Pants\")."
 *     type: string
 *   created_at:
 *     description: "The date with timezone at which the resource was created."
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: "The date with timezone at which the resource was last updated."
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: "The date with timezone at which the resource was deleted."
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: "An optional key-value map with additional information."
 *     type: object
 */
