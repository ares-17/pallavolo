<template>
    <div class="d-flex border border-primary rounded-1 border-3 justify-content-center field">
        <div class="row">
            <template v-for="(i, index) of Array(6)">
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <div 
                    class="d-flex my-1 border border-1 rounded-circle border-primary justify-content-center align-items-center position" 
                    @click="onClickPosition(index)">{{ `P${index+1}` }}</div>
                </div>
            </template>
        </div>
    </div>
    <div class="rounded-circle" @click="onClickPosition(1)"></div>
</template>

<script lang="ts">
export default {
    setup() {

        function onClickPosition(index: number){

        } 


        return {
            onClickPosition
        }
    },
    components: {

    }
}

</script>

<style scoped>
    :is(div).position{
        width: 3rem;
        height: 3rem;
    }

</style>