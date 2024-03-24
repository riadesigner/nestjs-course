import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { User } from './user.schema';
import { Location } from "../interfaces/location";

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop()
    public text: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop(raw({
        latitude: { type: Number },
        longitude: { type: Number }
    }))
    public location: Location;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
