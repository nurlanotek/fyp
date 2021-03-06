import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import RequestTable from "./RequestTable";
import User from "./User";

@Entity({ tableName: "driver_feed" })
export default class DriverFeed {
  @PrimaryKey()
  id!: number;

  @Property()
  destination: string;

  @Property()
  pricing: number;

  @Property({ name: "departure_date"})
  departureDate: string;

  @ManyToOne("User")
  client: User;

  @ManyToMany(() => RequestTable, "driverFeedRequest", { owner: true })
  request = new Collection<RequestTable>(this);

  @Property({type: "date", name: "created_at"})
  createdAt = new Date();

  @Property({type: "date", name: "update_at", onUpdate: () => new Date()})
  updatedAt = new Date();
 
  @Property({type: "date", name: "deleted_at", nullable: true})
  deletedAt: Date;
}