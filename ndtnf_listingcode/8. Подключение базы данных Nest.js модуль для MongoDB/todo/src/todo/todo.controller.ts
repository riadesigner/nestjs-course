import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { TodoDocument } from './schemas/todo.schema';
import { TodoService } from './todo.service';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';

import { IParamId } from './interfaces/param-id';
import { CreateTodoDto } from './interfaces/dto/create-todo';
import { UpdateTodoDto } from './interfaces/dto/update-todo';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    public create(@Body() body: CreateTodoDto): Promise<TodoDocument> {
        return this.todoService.create(body);
    }

    @Get()
    public getAll(): Promise<TodoDocument[]> {
        return this.todoService.getAll();
    }

    @Put(':id')
    public update(
        @Param() { id }: IParamId,
        @Body() body: UpdateTodoDto,
    ): QueryWithHelpers<HydratedDocument<TodoDocument, {}, {}> | null, HydratedDocument<TodoDocument, {}, {}>, {}, TodoDocument> {
        return this.todoService.update(id, body);
    }

    @Delete(':id')
    public delete(@Param() { id }: IParamId): QueryWithHelpers<HydratedDocument<TodoDocument, {}, {}> | null, HydratedDocument<TodoDocument, {}, {}>, {}, TodoDocument> {
        return this.todoService.delete(id);
    }
}
