import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Company {
  @PrimaryColumn()
  id: number;

  @Column()
  NUMDAT1: string;

  @Column()
  NUMDAT2: string;

  @Column()
  NUMDAT3: string;

  @Column()
  NUMDAT4: string;

  @Column()
  NUMDAT5: string;

  @Column()
  NUMDAT6: string;

  @Column()
  NUMDAT7: string;
}
