import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from '../../../node_modules/typeorm';

/**
 * Role entity fields:
 * @id string
 * @user_id string
 * @country number
 * @prefix number
 * @number string
 * @verified boolean
 */
@Entity('phones')
export default class Phone {
  constructor(partial: Partial<Phone>) {
    Object.assign(this, partial);
  }
  
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @Column()
  country!: number;

  @Column()
  prefix!: number;

  @Column()
  number!: string;

  @Column()
  verified!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;

  get information(): Partial<Phone> {
    return {
      id: this.id,
      country: this.country,
      prefix: this.prefix,
      number: this.number,
      verified: this.verified,
    }
  }
}