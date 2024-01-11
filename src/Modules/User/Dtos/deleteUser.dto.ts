import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DeleteUserDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    _id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  role:number;
  
}